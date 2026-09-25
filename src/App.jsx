import { useState, useEffect, useCallback, useRef } from 'react'
import SetupScreen from './components/SetupScreen'
import ArchetypeGrid from './components/ArchetypeGrid'
import DeckVariations from './components/DeckVariations'
import DeckViewer from './components/DeckViewer'
import CardModal from './components/CardModal'
import ExportDeckModal from './components/ExportDeckModal'
import LanguageToggle from './components/LanguageToggle'
import RestoreSessionModal from './components/RestoreSessionModal'
import SessionHistoryPanel from './components/SessionHistoryPanel'
import { loadCubeData, getDeck, parseManaColors, isValidDeckData } from './lib/cubeData.js'
import { ColorPips, colorToHex } from './components/ColorPips'
import { getAvailableArchetypes } from './lib/deckConflicts.js'
import { useI18n } from './i18n/useT.js'
import { pickLocalized } from './i18n/localized.js'
import { useDraftSession } from './hooks/useDraftSession.js'
import {
  findCubesDir,
  getCubeHandle,
  loadDirectoryHandle,
} from './lib/fsAccess.js'
import './App.css'

function shuffleArray(arr) {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function normalizePlayerPicks(raw) {
  const out = {}
  for (const [key, value] of Object.entries(raw || {})) {
    if (value?.archetypeKey && value?.deck) {
      out[Number(key)] = value
    }
  }
  return out
}

export default function App() {
  const { t, tp } = useI18n()
  const [config, setConfig] = useState(null)
  const [archetypes, setArchetypes] = useState([])
  const [deckSummaries, setDeckSummaries] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [currentPlayer, setCurrentPlayer] = useState(0)
  const [playerPicks, setPlayerPicks] = useState({})
  const [phase, setPhase] = useState('setup')
  const [displayedArchetypes, setDisplayedArchetypes] = useState([])
  const [selectedArchetype, setSelectedArchetype] = useState(null)
  const [selectedDeck, setSelectedDeck] = useState(null)
  const [deckData, setDeckData] = useState(null)
  const [modalCard, setModalCard] = useState(null)
  const [draftComplete, setDraftComplete] = useState(false)
  const [deckLoadError, setDeckLoadError] = useState(null)
  const [archetypeRollKey, setArchetypeRollKey] = useState(0)
  const [isHistoryView, setIsHistoryView] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [restoring, setRestoring] = useState(false)
  const [restoreErrorKey, setRestoreErrorKey] = useState(null)
  const deckLoadSeq = useRef(0)
  const skipPickRandomRef = useRef(false)

  const {
    pendingSession,
    sessionChecked,
    saveFailed,
    discardPendingSession,
    clearActiveSession,
    acceptPendingSession,
    initSessionFromRestore,
    persistSetupPrefs,
  } = useDraftSession({
    enabled: Boolean(config) && !isHistoryView && phase !== 'setup',
    config,
    phase,
    currentPlayer,
    playerPicks,
    draftComplete,
    displayedArchetypes,
    selectedArchetype,
    selectedDeck,
    loading,
  })

  const loadDeckWithConfig = useCallback(async (cfg, deckName, { keepPhase = false } = {}) => {
    const seq = ++deckLoadSeq.current
    setLoading(true)
    setDeckLoadError(null)
    try {
      const data = await getDeck(cfg.cubeHandle, deckName)
      if (seq !== deckLoadSeq.current) return false
      if (!isValidDeckData(data)) {
        setDeckLoadError('app.loadDeckFailed')
        return false
      }
      setDeckData(data)
      setSelectedDeck(deckName)
      if (!keepPhase) setPhase('deck')
      return true
    } catch (e) {
      if (seq !== deckLoadSeq.current) return false
      console.error(e)
      setDeckLoadError('app.loadDeckError')
      return false
    } finally {
      if (seq === deckLoadSeq.current) setLoading(false)
    }
  }, [])

  const loadDeck = useCallback(async (deckName) => {
    if (!config) return
    await loadDeckWithConfig(config, deckName)
  }, [config, loadDeckWithConfig])

  const applySessionToState = useCallback(async (session, { historyView = false } = {}) => {
    const rootHandle = await loadDirectoryHandle()
    if (!rootHandle) {
      throw new Error('NO_FOLDER')
    }

    const { cubesDir } = await findCubesDir(rootHandle)
    let cubeHandle
    try {
      cubeHandle = await getCubeHandle(cubesDir, session.config.cubeSlug)
    } catch {
      throw new Error('CUBE_MISSING')
    }

    const data = await loadCubeData(cubeHandle)
    if (!data.archetypes.length) {
      throw new Error('NO_ARCHETYPES')
    }

    const picks = normalizePlayerPicks(session.draft.playerPicks)
    const cfg = {
      cubesDirHandle: cubesDir,
      cubeHandle,
      cubeSlug: session.config.cubeSlug,
      cubeTitle: session.config.cubeTitle,
      playerCount: session.config.playerCount,
      archetypesPerPlayer: session.config.archetypesPerPlayer,
      uncommonBudget: session.config.uncommonBudget,
      rareExclusive: session.config.rareExclusive,
    }

    setConfig(cfg)
    setArchetypes(data.archetypes)
    setDeckSummaries(data.deckSummaries)
    setCurrentPlayer(session.draft.currentPlayer)
    setPlayerPicks(picks)
    setDraftComplete(session.draft.draftComplete)
    setIsHistoryView(historyView)
    setError(null)
    setDeckLoadError(null)

    const draftPhase = session.draft.phase
    setPhase(draftPhase)

    if (draftPhase === 'select' && !session.draft.draftComplete) {
      const available = getAvailableArchetypes(data.archetypes, picks, data.deckSummaries, cfg)
      const restored = (session.draft.displayedArchetypeKeys || [])
        .map(key => available.find(a => a.key === key))
        .filter(Boolean)

      if (
        restored.length > 0
        && restored.length === (session.draft.displayedArchetypeKeys || []).length
      ) {
        skipPickRandomRef.current = true
        setDisplayedArchetypes(restored)
      } else {
        skipPickRandomRef.current = false
        setArchetypeRollKey(k => k + 1)
      }
    } else {
      setDisplayedArchetypes([])
    }

    if (session.draft.selectedArchetypeKey) {
      const arch = data.archetypes.find(a => a.key === session.draft.selectedArchetypeKey)
      setSelectedArchetype(arch || null)
    } else {
      setSelectedArchetype(null)
    }

    setSelectedDeck(session.draft.selectedDeck)

    if (draftPhase === 'deck' && session.draft.selectedDeck) {
      await loadDeckWithConfig(cfg, session.draft.selectedDeck, { keepPhase: true })
    } else {
      setDeckData(null)
    }

    return cfg
  }, [loadDeckWithConfig])

  const handleRestoreSession = useCallback(async () => {
    const session = pendingSession
    if (!session) return

    setRestoring(true)
    setRestoreErrorKey(null)

    try {
      initSessionFromRestore(session)
      await applySessionToState(session)
      acceptPendingSession()
    } catch (e) {
      const code = e?.message
      if (code === 'NO_FOLDER') {
        setRestoreErrorKey('session.restore.noFolderPermission')
      } else if (code === 'CUBE_MISSING') {
        setRestoreErrorKey('session.restore.cubeMissing')
      } else {
        setRestoreErrorKey('session.restore.failed')
      }
    } finally {
      setRestoring(false)
    }
  }, [pendingSession, initSessionFromRestore, applySessionToState, acceptPendingSession])

  const resetToSetup = useCallback(() => {
    deckLoadSeq.current += 1
    setDeckLoadError(null)
    setConfig(null)
    setArchetypes([])
    setDeckSummaries({})
    setPhase('setup')
    setCurrentPlayer(0)
    setPlayerPicks({})
    setDraftComplete(false)
    setDisplayedArchetypes([])
    setSelectedArchetype(null)
    setSelectedDeck(null)
    setDeckData(null)
    setIsHistoryView(false)
    setError(null)
  }, [])

  const handleViewHistorySession = useCallback(async (session) => {
    setShowHistory(false)
    setLoading(true)
    setError(null)
    try {
      await applySessionToState(session, { historyView: true })
    } catch (e) {
      const code = e?.message
      if (code === 'NO_FOLDER') {
        setError('session.restore.noFolderPermission')
      } else if (code === 'CUBE_MISSING') {
        setError('session.restore.cubeMissing')
      } else {
        setError('session.restore.failed')
      }
      resetToSetup()
    } finally {
      setLoading(false)
    }
  }, [applySessionToState, resetToSetup])

  const handleSetup = useCallback(async (cfg) => {
    await discardPendingSession()
    await persistSetupPrefs({
      cubeSlug: cfg.cubeSlug,
      playerCount: cfg.playerCount,
      archetypesPerPlayer: cfg.archetypesPerPlayer,
      uncommonBudget: cfg.uncommonBudget,
      rareExclusive: cfg.rareExclusive,
    })

    setConfig(cfg)
    setLoading(true)
    setError(null)
    setIsHistoryView(false)
    try {
      const data = await loadCubeData(cfg.cubeHandle)
      if (!data.archetypes.length) {
        setError('app.noArchetypes')
        setLoading(false)
        return
      }
      setArchetypes(data.archetypes)
      setDeckSummaries(data.deckSummaries)
      setCurrentPlayer(0)
      setPlayerPicks({})
      setPhase('select')
      setDraftComplete(false)
      setArchetypeRollKey(k => k + 1)
    } catch (e) {
      setError('app.loadCubeError')
      console.error(e)
    }
    setLoading(false)
  }, [discardPendingSession, persistSetupPrefs])

  const pickRandom = useCallback(() => {
    if (archetypes.length === 0) return
    const available = getAvailableArchetypes(archetypes, playerPicks, deckSummaries, config)
    const shuffled = shuffleArray(available)
    setDisplayedArchetypes(shuffled.slice(0, Math.min(config?.archetypesPerPlayer || 4, shuffled.length)))
  }, [archetypes, playerPicks, deckSummaries, config])

  useEffect(() => {
    if (phase === 'select' && !draftComplete) {
      if (skipPickRandomRef.current) {
        skipPickRandomRef.current = false
        return
      }
      pickRandom()
    }
  }, [archetypeRollKey, draftComplete, pickRandom, phase])

  const handleSelectArchetype = (archetype) => {
    setSelectedArchetype(archetype)
    setPhase('variations')
  }

  const advanceToNextPlayer = useCallback(() => {
    if (currentPlayer + 1 >= config.playerCount) {
      setDraftComplete(true)
      setPhase('results')
    } else {
      setCurrentPlayer(currentPlayer + 1)
      setSelectedArchetype(null)
      setSelectedDeck(null)
      setDeckData(null)
      setPhase('select')
      setArchetypeRollKey(k => k + 1)
    }
  }, [currentPlayer, config])

  const handleSkipPlayer = () => {
    advanceToNextPlayer()
  }

  const handleSelectDeck = (deckName) => {
    loadDeck(deckName)
  }

  const handleConfirmDeck = () => {
    const newPicks = { ...playerPicks, [currentPlayer]: { archetypeKey: selectedArchetype.key, deck: selectedDeck } }
    setPlayerPicks(newPicks)
    advanceToNextPlayer()
  }

  const handleChangePick = useCallback((playerIndex) => {
    if (isHistoryView) return

    const hasLaterPicks = Object.keys(playerPicks).some(
      key => Number(key) > playerIndex && playerPicks[key],
    )
    if (hasLaterPicks) {
      const ok = window.confirm(t('app.changePickConfirm'))
      if (!ok) return
    }

    deckLoadSeq.current += 1
    setLoading(false)
    setDeckLoadError(null)

    const newPicks = { ...playerPicks }
    for (let i = playerIndex; i < config.playerCount; i++) {
      delete newPicks[i]
    }

    setPlayerPicks(newPicks)
    setCurrentPlayer(playerIndex)
    setDraftComplete(false)
    setSelectedArchetype(null)
    setSelectedDeck(null)
    setDeckData(null)
    setPhase('select')
    setArchetypeRollKey(k => k + 1)
  }, [playerPicks, config, t, isHistoryView])

  const handleBack = () => {
    deckLoadSeq.current += 1
    setLoading(false)
    setDeckLoadError(null)
    if (phase === 'variations') {
      // Returning to 'select' re-runs the deal effect; keep the hand on screen.
      skipPickRandomRef.current = true
      setPhase('select')
      setSelectedArchetype(null)
    } else if (phase === 'deck') {
      if (draftComplete) {
        setPhase('results')
        setDeckData(null)
        setSelectedDeck(null)
      } else {
        setPhase('variations')
        setDeckData(null)
        setSelectedDeck(null)
      }
    }
  }

  const handleReroll = () => pickRandom()

  const handleRestart = useCallback(async () => {
    await clearActiveSession()
    resetToSetup()
  }, [clearActiveSession, resetToSetup])

  const handleDiscardRestore = useCallback(async () => {
    await discardPendingSession()
    setRestoreErrorKey(null)
  }, [discardPendingSession])

  const handleViewResultDeck = (deckName) => {
    loadDeck(deckName)
  }

  if (!sessionChecked) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p>{t('app.loading')}</p>
      </div>
    )
  }

  if (phase === 'setup' || !config) {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">
            <span className="title-icon">🩸</span>
            {t('app.title')}
          </h1>
          <div className="header-controls">
            <LanguageToggle />
          </div>
        </header>
        <main className="app-main">
          <SetupScreen
            onStart={handleSetup}
            onOpenHistory={() => setShowHistory(true)}
          />
        </main>

        {pendingSession && (
          <RestoreSessionModal
            session={pendingSession}
            restoring={restoring}
            restoreErrorKey={restoreErrorKey}
            onContinue={handleRestoreSession}
            onDiscard={handleDiscardRestore}
            onViewHistory={() => {
              setShowHistory(true)
            }}
          />
        )}

        <SessionHistoryPanel
          open={showHistory}
          onClose={() => setShowHistory(false)}
          onViewSession={handleViewHistorySession}
        />
      </div>
    )
  }

  if (loading) {
    const loadingMessage = phase === 'select'
      ? t('app.loadingArchetypes', { title: config.cubeTitle })
      : phase === 'variations'
        ? t('app.loadingDeck')
        : t('app.loading')
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p>{loadingMessage}</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="loading-screen">
        <h2>{t('app.error')}</h2>
        <p>{t(error)}</p>
        <button className="btn-reroll" onClick={handleRestart}>{t('app.restart')}</button>
      </div>
    )
  }

  const takenArchetypes = Object.values(playerPicks).map(p => p?.archetypeKey).filter(Boolean)

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">
          <span className="title-icon">🩸</span>
          {config.cubeTitle}
          <span className="title-sub">{t('app.subtitle')}</span>
        </h1>
        <div className="header-controls">
          <LanguageToggle />
          {(phase === 'deck' || phase === 'variations') && (
            <button className="btn-back" onClick={handleBack}>{t('app.back')}</button>
          )}
          {phase === 'select' && !draftComplete && !isHistoryView && (
            <>
              <button className="btn-reroll" onClick={handleReroll}>{t('app.reroll')}</button>
              {displayedArchetypes.length === 0 && (
                <button className="btn-reroll" onClick={handleSkipPlayer}>{t('app.skipPlayer')}</button>
              )}
            </>
          )}
          {isHistoryView ? (
            <button className="btn-back" onClick={handleRestart}>{t('session.history.backToSetup')}</button>
          ) : (
            <button className="btn-back" onClick={handleRestart}>{t('app.newGame')}</button>
          )}
        </div>
      </header>

      <main className="app-main">
        {saveFailed && !isHistoryView && (
          <p className="session-save-warning" role="status">{t('session.saveFailed')}</p>
        )}

        {deckLoadError && (
          <p className="setup-error" style={{ textAlign: 'center', marginBottom: 16 }}>
            {t(deckLoadError)}
          </p>
        )}

        {!draftComplete && !isHistoryView && (
          <div className="player-indicator">
            <div className="player-indicator-inner">
              <h3 className="player-label">{t('player.label', { n: currentPlayer + 1 })}</h3>
              <div className="player-dots">
                {Array.from({ length: config.playerCount }, (_, i) => {
                  const isDone = Boolean(playerPicks[i])
                  const canChange = isDone && i < currentPlayer
                  if (canChange) {
                    return (
                      <button
                        key={i}
                        type="button"
                        className="player-dot done clickable"
                        title={t('player.changePickTitle', { n: i + 1 })}
                        onClick={() => handleChangePick(i)}
                      >
                        {i + 1}
                      </button>
                    )
                  }
                  return (
                    <span key={i} className={`player-dot ${i === currentPlayer ? 'active' : ''} ${isDone ? 'done' : ''}`}>
                      {i + 1}
                    </span>
                  )
                })}
              </div>
              <p className="player-status">
                {tp('player.chooseArchetypes', config.archetypesPerPlayer)}
                {takenArchetypes.length > 0 && ` ${t('player.alreadyTaken', { count: takenArchetypes.length })}`}
              </p>
            </div>
          </div>
        )}

        {draftComplete && phase === 'results' && (
          <DraftResults
            config={config}
            playerPicks={playerPicks}
            deckSummaries={deckSummaries}
            readOnly={isHistoryView}
            onViewDeck={(playerIndex, deckName) => {
              setCurrentPlayer(playerIndex)
              handleViewResultDeck(deckName)
            }}
            onChangePick={isHistoryView ? undefined : handleChangePick}
            onRestart={handleRestart}
          />
        )}

        {phase === 'deck' && isValidDeckData(deckData) && (
          <DeckViewer
            deckData={deckData}
            deckName={selectedDeck}
            onCardClick={setModalCard}
            onConfirm={draftComplete || isHistoryView ? undefined : handleConfirmDeck}
            playerNumber={draftComplete || isHistoryView ? undefined : currentPlayer + 1}
          />
        )}

        {!draftComplete && phase === 'select' && (
          displayedArchetypes.length === 0 ? (
            <div className="phase-section">
              <div className="phase-header">
                <h2 className="phase-title">{t('app.noArchetypesTitle')}</h2>
                <p className="phase-subtitle">
                  {t('app.noArchetypesBody')}
                </p>
              </div>
              <div style={{ textAlign: 'center', display: 'flex', gap: 12, justifyContent: 'center' }}>
                <button className="btn-reroll" onClick={handleReroll}>{t('app.reroll')}</button>
                <button className="btn-reroll" onClick={handleSkipPlayer}>{t('app.skipPlayer')}</button>
              </div>
            </div>
          ) : (
            <ArchetypeGrid
              archetypes={displayedArchetypes}
              deckSummaries={deckSummaries}
              onSelect={handleSelectArchetype}
              onCardClick={setModalCard}
              playerNumber={currentPlayer + 1}
            />
          )
        )}

        {!draftComplete && phase === 'variations' && selectedArchetype && (
          <DeckVariations
            archetype={selectedArchetype}
            deckSummaries={deckSummaries}
            onSelect={handleSelectDeck}
            onCardClick={setModalCard}
          />
        )}
      </main>

      {modalCard && <CardModal card={modalCard} onClose={() => setModalCard(null)} />}
    </div>
  )
}

function DraftResults({ config, playerPicks, deckSummaries, onViewDeck, onChangePick, onRestart, readOnly = false }) {
  const { t, locale } = useI18n()
  const [exportTarget, setExportTarget] = useState(null)

  return (
    <div className="phase-section results-section">
      <div className="results-header">
        <span className="results-eyebrow">{t('results.eyebrow')}</span>
        <h2 className="results-title">{t('results.title')}</h2>
        <p className="results-subtitle">{t('results.subtitle')}</p>
      </div>

      <div className="results-grid">
        {Array.from({ length: config.playerCount }, (_, i) => {
          const pick = playerPicks[i]
          const deck = pick ? deckSummaries[pick.deck] : null
          const colors = deck ? parseManaColors(deck.colors) : []
          const accent = colors.length ? colorToHex(colors[0]) : '#d4a843'

          return (
            <article
              key={i}
              className="result-card"
              style={{
                '--card-accent': accent,
                animationDelay: `${i * 0.08}s`,
              }}
            >
              {pick && deck ? (
                <>
                  <div className="result-card-glow" aria-hidden="true" />
                  <div className="result-card-accent" aria-hidden="true" />

                  <div className="result-card-top">
                    <span className="result-player-badge">{t('player.label', { n: i + 1 })}</span>
                    <ColorPips colors={deck.colors} />
                  </div>

                  <div className="result-card-body">
                    <p className="result-archetype">{pick.archetypeKey}</p>
                    <h3 className="result-deck-name">{deck.display_name}</h3>
                    {pickLocalized(deck.strategy, locale) && (
                      <p className="result-strategy">{pickLocalized(deck.strategy, locale)}</p>
                    )}
                  </div>

                  <div className="result-actions">
                    <button
                      type="button"
                      className="result-btn result-btn-primary"
                      onClick={() => onViewDeck(i, pick.deck)}
                    >
                      <span className="result-btn-icon" aria-hidden="true">◈</span>
                      {t('results.viewDeck')}
                    </button>
                    <button
                      type="button"
                      className="result-btn result-btn-export"
                      onClick={() => setExportTarget({
                        deckName: pick.deck,
                        deckLabel: deck.display_name,
                        playerIndex: i,
                      })}
                    >
                      <span className="result-btn-icon" aria-hidden="true">↓</span>
                      {t('results.exportDeck')}
                    </button>
                    {!readOnly && onChangePick && (
                      <button
                        type="button"
                        className="result-btn result-btn-ghost"
                        onClick={() => onChangePick(i)}
                      >
                        {t('results.changeSelection')}
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <div className="result-empty-state">
                  <span className="result-empty-icon" aria-hidden="true">—</span>
                  <p className="result-empty">{t('results.empty')}</p>
                </div>
              )}
            </article>
          )
        })}
      </div>

      <div className="results-footer">
        <button type="button" className="btn-results-restart" onClick={onRestart}>
          <span className="result-btn-icon" aria-hidden="true">⟳</span>
          {readOnly ? t('session.history.backToSetup') : t('app.newGame')}
        </button>
      </div>

      {exportTarget && (
        <ExportDeckModal
          cubeHandle={config.cubeHandle}
          deckName={exportTarget.deckName}
          deckLabel={t('results.exportLabel', {
            n: exportTarget.playerIndex + 1,
            deck: exportTarget.deckLabel,
          })}
          onClose={() => setExportTarget(null)}
        />
      )}
    </div>
  )
}
