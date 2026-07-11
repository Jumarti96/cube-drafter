import { useState, useEffect } from 'react'
import { getDeck, isValidDeckData } from '../lib/cubeData.js'
import { getDeckExportOptions, groupDeckExportOptions, localizeExportOption, runDeckExport } from '../lib/deckExport.js'
import { useI18n } from '../i18n/useT.js'

function ExportOptionCard({ option, accent, disabled, isBusy, onClick, t }) {
  const actionMeta = {
    download: { label: t('export.download'), icon: '↓' },
    copy: { label: t('export.copy'), icon: '⎘' },
    generate: { label: t('export.generatePdf'), icon: '◈' },
  }
  const action = actionMeta[option.actionType] || actionMeta.download

  return (
    <button
      type="button"
      className={`export-option-card ${option.featured ? 'featured' : ''}`}
      style={{ '--export-accent': accent }}
      disabled={disabled}
      onClick={onClick}
    >
      <div className="export-option-accent" aria-hidden="true" />
      <div className="export-option-top">
        <span className="export-option-icon" aria-hidden="true">{action.icon}</span>
        <span className="export-option-badge">{action.label}</span>
      </div>
      <span className="export-option-name">
        {isBusy ? t('export.processing') : option.name}
      </span>
      <span className="export-option-desc">{option.desc}</span>
      <span className="export-option-arrow" aria-hidden="true">→</span>
    </button>
  )
}

export default function ExportDeckModal({ cubeHandle, deckName, deckLabel, onClose }) {
  const { t } = useI18n()
  const [deckData, setDeckData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [errorKey, setErrorKey] = useState(null)
  const [activeExport, setActiveExport] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setErrorKey(null)
      try {
        const data = await getDeck(cubeHandle, deckName)
        if (cancelled) return
        if (!isValidDeckData(data)) {
          setErrorKey('export.loadFailed')
          return
        }
        setDeckData(data)
      } catch (err) {
        if (cancelled) return
        console.error(err)
        setErrorKey('export.loadError')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => { cancelled = true }
  }, [cubeHandle, deckName])

  const options = deckData
    ? getDeckExportOptions(deckData).map(opt => localizeExportOption(opt, t))
    : []
  const groups = groupDeckExportOptions(options)

  async function handleExport(option) {
    if (activeExport) return
    setActiveExport(option.id)
    try {
      await runDeckExport(option.id, deckData, deckName, t)
    } catch (err) {
      console.error(err)
      alert(t('export.exportFailed'))
    } finally {
      setActiveExport(null)
    }
  }

  const displayName = deckLabel || deckName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

  return (
    <div className="modal-overlay export-modal-overlay" onClick={onClose}>
      <div className="export-modal" onClick={e => e.stopPropagation()}>
        <div className="export-modal-glow" aria-hidden="true" />

        <header className="export-modal-header">
          <div className="export-modal-header-text">
            <span className="export-modal-eyebrow">{t('export.eyebrow')}</span>
            <h2 className="export-modal-title">{t('export.title')}</h2>
            <p className="export-modal-subtitle">{displayName}</p>
          </div>
          <button className="export-modal-close" onClick={onClose} aria-label={t('export.close')}>
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="export-modal-body">
          {loading && (
            <div className="export-modal-loading">
              <div className="loading-spinner" />
              <p>{t('export.loading')}</p>
            </div>
          )}

          {errorKey && (
            <div className="export-modal-error">
              <span className="export-modal-error-icon" aria-hidden="true">!</span>
              <p>{t(errorKey)}</p>
            </div>
          )}

          {!loading && !errorKey && (
            <div className="export-modal-sections">
              {groups.map(group => (
                <section
                  key={group.key}
                  className={`export-section ${group.featured ? 'export-section-featured' : ''}`}
                  style={{ '--section-accent': group.accent }}
                >
                  <div className="export-section-header">
                    <span className="export-section-dot" aria-hidden="true" />
                    <h3 className="export-section-title">{group.label}</h3>
                  </div>
                  <div className={`export-section-grid ${group.options.length === 1 ? 'single' : ''}`}>
                    {group.options.map(option => (
                      <ExportOptionCard
                        key={option.id}
                        option={option}
                        accent={group.accent}
                        disabled={Boolean(activeExport)}
                        isBusy={activeExport === option.id}
                        onClick={() => handleExport(option)}
                        t={t}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>

        {!loading && !errorKey && (
          <footer className="export-modal-footer">
            <p>{t('export.footer')}</p>
          </footer>
        )}
      </div>
    </div>
  )
}
