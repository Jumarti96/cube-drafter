import { useState, useEffect, useCallback, useRef } from 'react'
import SetupScreen from './components/SetupScreen'
import ArchetypeGrid from './components/ArchetypeGrid'
import DeckVariations from './components/DeckVariations'
import DeckViewer from './components/DeckViewer'
import CardModal from './components/CardModal'
import ExportDeckModal from './components/ExportDeckModal'
import LanguageToggle from './components/LanguageToggle'
import { loadCubeData, getDeck, parseManaColors, isValidDeckData } from './lib/cubeData.js'
import { ColorPips, colorToHex } from './components/ColorPips'
import { getAvailableArchetypes } from './lib/deckConflicts.js'
import { useI18n } from './i18n/useT.js'
import './App.css'

function shuffleArray(arr) {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
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
  const deckLoadSeq = useRef(0)

  const handleSetup = useCallback(async (cfg) => {
    setConfig(cfg)
    setLoading(true)
    setError(null)
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
  }, [])

  const pickRandom = useCallback(() => {
    if (archetypes.length === 0) return
    const available = getAvailableArchetypes(archetypes, playerPicks, deckSummaries)
    const shuffled = shuffleArray(available)
    setDisplayedArchetypes(shuffled.slice(0, Math.min(config?.archetypesPerPlayer || 4, shuffled.length)))
  }, [archetypes, playerPicks, deckSummaries, config])

  useEffect(() => {
    if (phase === 'select' && !draftComplete) {
      pickRandom()
    }
  }, [archetypeRollKey, draftComplete, pickRandom])

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

  const loadDeck = useCallback(async (deckName) => {
    const seq = ++deckLoadSeq.current
    setLoading(true)
    setDeckLoadError(null)
    try {
      const data = await getDeck(config.cubeHandle, deckName)
      if (seq !== deckLoadSeq.current) return
      if (!isValidDeckData(data)) {
        setDeckLoadError('app.loadDeckFailed')
        return
      }
      setDeckData(data)
      setSelectedDeck(deckName)
      setPhase('deck')
    } catch (e) {
      if (seq !== deckLoadSeq.current) return
      console.error(e)
      setDeckLoadError('app.loadDeckError')
    } finally {
      if (seq === deckLoadSeq.current) setLoading(false)
    }
  }, [config])

  const handleSelectDeck = (deckName) => {
    loadDeck(deckName)
  }

  const handleConfirmDeck = () => {
    const newPicks = { ...playerPicks, [currentPlayer]: { archetypeKey: selectedArchetype.key, deck: selectedDeck } }
    setPlayerPicks(newPicks)
    advanceToNextPlayer()
  }

  const handleChangePick = useCallback((playerIndex) => {
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
  }, [playerPicks, config, t])

  const handleBack = () => {
    deckLoadSeq.current += 1
    setLoading(false)
    setDeckLoadError(null)
    if (phase === 'variations') {
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

  const handleRestart = () => {
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
  }

  const handleViewResultDeck = (deckName) => {
    loadDeck(deckName)
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
          <SetupScreen onStart={handleSetup} />
        </main>
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
          {phase === 'select' && !draftComplete && (
            <>
              <button className="btn-reroll" onClick={handleReroll}>{t('app.reroll')}</button>
              {displayedArchetypes.length === 0 && (
                <button className="btn-reroll" onClick={handleSkipPlayer}>{t('app.skipPlayer')}</button>
              )}
            </>
          )}
          <button className="btn-back" onClick={handleRestart}>{t('app.newGame')}</button>
        </div>
      </header>

      <main className="app-main">
        {deckLoadError && (
          <p className="setup-error" style={{ textAlign: 'center', marginBottom: 16 }}>
            {t(deckLoadError)}
          </p>
        )}

        {!draftComplete && (
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
            onViewDeck={(playerIndex, deckName) => {
              setCurrentPlayer(playerIndex)
              handleViewResultDeck(deckName)
            }}
            onChangePick={handleChangePick}
            onRestart={handleRestart}
          />
        )}

        {phase === 'deck' && isValidDeckData(deckData) && (
          <DeckViewer
            deckData={deckData}
            deckName={selectedDeck}
            onCardClick={setModalCard}
            onConfirm={draftComplete ? undefined : handleConfirmDeck}
            playerNumber={draftComplete ? undefined : currentPlayer + 1}
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

function DraftResults({ config, playerPicks, deckSummaries, onViewDeck, onChangePick, onRestart }) {
  const { t } = useI18n()
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
                    {deck.strategy && (
                      <p className="result-strategy">{deck.strategy}</p>
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
                    <button
                      type="button"
                      className="result-btn result-btn-ghost"
                      onClick={() => onChangePick(i)}
                    >
                      {t('results.changeSelection')}
                    </button>
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
          {t('app.newGame')}
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
