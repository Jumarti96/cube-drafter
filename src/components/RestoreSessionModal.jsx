import { useEffect, useRef } from 'react'
import { useI18n } from '../i18n/useT.js'
import { countConfirmedPicks } from '../lib/draftPersistence.js'

export default function RestoreSessionModal({
  session,
  onContinue,
  onDiscard,
  onViewHistory,
  restoring,
  restoreErrorKey,
}) {
  const { t, tp } = useI18n()
  const continueRef = useRef(null)

  useEffect(() => {
    continueRef.current?.focus()
    function onKeyDown(e) {
      if (e.key === 'Escape' && !restoring) onDiscard()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onDiscard, restoring])

  if (!session) return null

  const { config, draft, updatedAt } = session
  const picksDone = countConfirmedPicks(draft.playerPicks, config.playerCount)
  const lastActivity = updatedAt
    ? new Date(updatedAt).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })
    : ''

  return (
    <div className="session-modal-overlay" role="presentation" onClick={restoring ? undefined : onDiscard}>
      <div
        className="session-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="restore-session-title"
        onClick={e => e.stopPropagation()}
      >
        <div className="session-modal-glow" aria-hidden="true" />
        <header className="session-modal-header">
          <span className="session-modal-eyebrow">{t('session.restore.eyebrow')}</span>
          <h2 id="restore-session-title" className="session-modal-title">
            {t('session.restore.title')}
          </h2>
          <p className="session-modal-subtitle">{t('session.restore.subtitle')}</p>
        </header>

        <div className="session-modal-body">
          <dl className="session-restore-details">
            <div className="session-restore-row">
              <dt>{t('session.restore.cube')}</dt>
              <dd>{config.cubeTitle}</dd>
            </div>
            <div className="session-restore-row">
              <dt>{t('session.restore.players')}</dt>
              <dd>{config.playerCount}</dd>
            </div>
            <div className="session-restore-row">
              <dt>{t('session.restore.progress')}</dt>
              <dd>{tp('session.restore.picksDone', picksDone, { done: picksDone, total: config.playerCount })}</dd>
            </div>
            {lastActivity && (
              <div className="session-restore-row">
                <dt>{t('session.restore.lastActivity')}</dt>
                <dd>{lastActivity}</dd>
              </div>
            )}
          </dl>

          {restoreErrorKey && (
            <p className="session-restore-error" role="alert">{t(restoreErrorKey)}</p>
          )}
        </div>

        <footer className="session-modal-footer">
          <button
            ref={continueRef}
            type="button"
            className="session-btn session-btn-primary"
            disabled={restoring}
            onClick={onContinue}
          >
            {restoring ? t('session.restore.restoring') : t('session.restore.continue')}
          </button>
          <button
            type="button"
            className="session-btn session-btn-secondary"
            disabled={restoring}
            onClick={onViewHistory}
          >
            {t('session.restore.viewHistory')}
          </button>
          <button
            type="button"
            className="session-btn session-btn-ghost"
            disabled={restoring}
            onClick={onDiscard}
          >
            {t('session.restore.discard')}
          </button>
        </footer>
      </div>
    </div>
  )
}
