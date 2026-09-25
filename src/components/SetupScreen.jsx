import { useState, useEffect, useCallback } from 'react'
import { listCubes } from '../lib/cubeData.js'
import { DEFAULT_UNCOMMON_BUDGET } from '../lib/deckConflicts.js'
import {
  pickDirectory,
  getDirectoryFromDrop,
  findCubesDir,
  loadDirectoryHandle,
} from '../lib/fsAccess.js'
import { loadSetupPrefs } from '../lib/draftPersistence.js'
import { useI18n } from '../i18n/useT.js'

const MAX_UNCOMMON_BUDGET = 4

function clampCount(raw, fallback, min, max) {
  const n = parseInt(String(raw).trim(), 10)
  if (Number.isNaN(n)) return fallback
  return Math.min(max, Math.max(min, n))
}

function SetupNumberInput({ id, label, value, onChange, min, max, fallback }) {
  const [draft, setDraft] = useState(String(value))
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    if (!focused) setDraft(String(value))
  }, [value, focused])

  function commit(nextValue) {
    const clamped = clampCount(nextValue, fallback, min, max)
    onChange(clamped)
    setDraft(String(clamped))
  }

  function bump(delta) {
    const current = clampCount(draft, fallback, min, max)
    commit(current + delta)
  }

  return (
    <div className="setup-field setup-field-half">
      <label className="setup-label" htmlFor={id}>{label}</label>
      <input
        id={id}
        className="setup-input setup-input-number"
        type="number"
        min={min}
        max={max}
        inputMode="numeric"
        value={focused ? draft : String(value)}
        onFocus={e => {
          setFocused(true)
          setDraft(String(value))
          e.target.select()
        }}
        onChange={e => setDraft(e.target.value)}
        onBlur={() => {
          setFocused(false)
          commit(draft)
        }}
        onKeyDown={e => {
          if (e.key === 'ArrowUp') {
            e.preventDefault()
            bump(1)
          } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            bump(-1)
          } else if (e.key === 'Enter') {
            e.preventDefault()
            commit(draft)
            e.currentTarget.blur()
          }
        }}
      />
    </div>
  )
}

function applyPrefsToCubes(found, prefs) {
  if (!prefs?.cubeSlug) {
    return { selectedCube: found[0]?.slug ?? '', playerCount: 2, archetypesPerPlayer: 4 }
  }

  const cubeExists = found.some(c => c.slug === prefs.cubeSlug)
  return {
    selectedCube: cubeExists ? prefs.cubeSlug : (found[0]?.slug ?? ''),
    playerCount: prefs.playerCount ?? 2,
    archetypesPerPlayer: prefs.archetypesPerPlayer ?? 4,
  }
}

/**
 * Conflict rules for a cube: a remembered per-cube override wins, otherwise the
 * cube's own `uncommon_copies` from meta.json.
 */
function resolveCubeRules(cube, prefs) {
  const saved = prefs?.cubeRules?.[cube?.slug]
  return {
    uncommonBudget: saved?.uncommonBudget ?? cube?.uncommonCopies ?? DEFAULT_UNCOMMON_BUDGET,
    rareExclusive: saved?.rareExclusive ?? true,
  }
}

export default function SetupScreen({ onStart, onOpenHistory }) {
  const { t, tp } = useI18n()
  const [folderLabel, setFolderLabel] = useState('')
  const [cubesDirHandle, setCubesDirHandle] = useState(null)
  const [cubes, setCubes] = useState([])
  const [selectedCube, setSelectedCube] = useState('')
  const [playerCount, setPlayerCount] = useState(2)
  const [archetypesPerPlayer, setArchetypesPerPlayer] = useState(4)
  const [uncommonBudget, setUncommonBudget] = useState(DEFAULT_UNCOMMON_BUDGET)
  const [rareExclusive, setRareExclusive] = useState(true)
  const [prefs, setPrefs] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorKey, setErrorKey] = useState('')
  const [dragOver, setDragOver] = useState(false)

  const clearError = () => setErrorKey('')

  const scanCubes = useCallback(async (rootHandle) => {
    setLoading(true)
    clearError()
    setCubes([])
    setSelectedCube('')
    try {
      const { cubesDir, label } = await findCubesDir(rootHandle)
      setCubesDirHandle(cubesDir)
      setFolderLabel(label)
      const found = await listCubes(cubesDir)
      if (!found.length) {
        setErrorKey('setup.noCubes')
        return
      }
      setCubes(found)

      const savedPrefs = await loadSetupPrefs()
      const applied = applyPrefsToCubes(found, savedPrefs)
      setPrefs(savedPrefs)
      setSelectedCube(applied.selectedCube)
      setPlayerCount(applied.playerCount)
      setArchetypesPerPlayer(applied.archetypesPerPlayer)

      const rules = resolveCubeRules(
        found.find(c => c.slug === applied.selectedCube),
        savedPrefs,
      )
      setUncommonBudget(rules.uncommonBudget)
      setRareExclusive(rules.rareExclusive)
    } catch (e) {
      if (e.name === 'AbortError') return
      setErrorKey(e.i18nKey || 'setup.readFolderFailed')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadDirectoryHandle()
      .then(handle => {
        if (handle) scanCubes(handle)
      })
      .catch(() => {})
  }, [scanCubes])

  async function handlePickFolder() {
    clearError()
    try {
      const handle = await pickDirectory()
      await scanCubes(handle)
    } catch (e) {
      if (e.name !== 'AbortError') {
        setErrorKey(e.i18nKey || 'setup.openFolderFailed')
      }
    }
  }

  async function handleDrop(e) {
    e.preventDefault()
    e.stopPropagation()
    setDragOver(false)
    clearError()
    try {
      const handle = await getDirectoryFromDrop(e.dataTransfer)
      if (!handle) {
        setErrorKey('setup.dropFolderOnly')
        return
      }
      await scanCubes(handle)
    } catch (err) {
      setErrorKey(err.i18nKey || 'setup.readDropFailed')
    }
  }

  function handleSelectCube(slug) {
    setSelectedCube(slug)
    const rules = resolveCubeRules(cubes.find(c => c.slug === slug), prefs)
    setUncommonBudget(rules.uncommonBudget)
    setRareExclusive(rules.rareExclusive)
  }

  function handleStart() {
    if (!selectedCube || !cubesDirHandle || playerCount < 1 || archetypesPerPlayer < 1) return
    const cube = cubes.find(c => c.slug === selectedCube)
    if (!cube) return
    onStart({
      cubesDirHandle,
      cubeHandle: cube.handle,
      cubeSlug: selectedCube,
      cubeTitle: cube.title,
      playerCount: Math.max(1, Math.min(playerCount, 8)),
      archetypesPerPlayer: Math.max(1, Math.min(archetypesPerPlayer, 6)),
      uncommonBudget: Math.max(1, Math.min(uncommonBudget, MAX_UNCOMMON_BUDGET)),
      rareExclusive,
    })
  }

  const canStart = selectedCube && cubesDirHandle && playerCount >= 1 && archetypesPerPlayer >= 1 && cubes.length > 0

  return (
    <div className="setup-screen">
      <div className="setup-card">
        <h1 className="setup-title">
          <span className="title-icon">🩸</span>
          {t('app.title')}
        </h1>
        <p className="setup-subtitle">{t('setup.subtitle')}</p>

        <div className="setup-field">
          <label className="setup-label">{t('setup.cubesFolder')}</label>
          <div
            className={`setup-dropzone ${dragOver ? 'drag-over' : ''} ${cubes.length > 0 ? 'has-cubes' : ''} ${loading ? 'loading' : ''}`}
            role="button"
            tabIndex={loading ? -1 : 0}
            aria-disabled={loading}
            onClick={() => !loading && handlePickFolder()}
            onKeyDown={e => {
              if (!loading && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault()
                handlePickFolder()
              }
            }}
            onDragOver={e => { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; setDragOver(true) }}
            onDragLeave={e => { e.preventDefault(); setDragOver(false) }}
            onDrop={handleDrop}
          >
            <div className="setup-dropzone-inner">
              <span className="dropzone-icon">📂</span>
              {loading && !folderLabel ? (
                <p className="dropzone-text">{t('setup.scanning')}</p>
              ) : folderLabel ? (
                <>
                  <p className="dropzone-text dropzone-folder">{folderLabel}</p>
                  <p className="dropzone-hint">
                    {loading ? t('setup.scanning') : tp('setup.cubesDetected', cubes.length)}
                  </p>
                </>
              ) : (
                <>
                  <p className="dropzone-text">{t('setup.dropHint')}</p>
                  <p className="dropzone-hint">{t('setup.orClick')}</p>
                </>
              )}
            </div>
          </div>
        </div>

        {errorKey && <p className="setup-error">{t(errorKey)}</p>}

        <div className="setup-field">
          <label className="setup-label">{t('setup.cube')}</label>
          <select
            className="setup-input"
            value={selectedCube}
            onChange={e => handleSelectCube(e.target.value)}
            disabled={cubes.length === 0}
          >
            {cubes.length === 0 && <option value="">{t('setup.chooseFolderFirst')}</option>}
            {cubes.map(c => (
              <option key={c.slug} value={c.slug}>{c.title} ({c.slug})</option>
            ))}
          </select>
        </div>

        <div className="setup-row">
          <SetupNumberInput
            id="setup-player-count"
            label={t('setup.players')}
            value={playerCount}
            onChange={setPlayerCount}
            min={1}
            max={8}
            fallback={2}
          />
          <SetupNumberInput
            id="setup-archetypes-per-player"
            label={t('setup.archetypesPerPlayer')}
            value={archetypesPerPlayer}
            onChange={setArchetypesPerPlayer}
            min={1}
            max={6}
            fallback={4}
          />
        </div>

        <div className="setup-row">
          <SetupNumberInput
            id="setup-uncommon-budget"
            label={t('setup.uncommonCopies')}
            value={uncommonBudget}
            onChange={setUncommonBudget}
            min={1}
            max={MAX_UNCOMMON_BUDGET}
            fallback={DEFAULT_UNCOMMON_BUDGET}
          />
          <label className="setup-checkbox" htmlFor="setup-rare-exclusive">
            <input
              id="setup-rare-exclusive"
              type="checkbox"
              checked={rareExclusive}
              onChange={e => setRareExclusive(e.target.checked)}
            />
            <span>{t('setup.rareExclusive')}</span>
          </label>
        </div>
        <p className="setup-hint">{t('setup.copiesHint')}</p>

        <button className="setup-btn-start" onClick={handleStart} disabled={!canStart || loading}>
          {t('setup.start')}
        </button>

        {onOpenHistory && (
          <button type="button" className="setup-btn-history" onClick={onOpenHistory}>
            {t('session.history.open')}
          </button>
        )}
      </div>
    </div>
  )
}
