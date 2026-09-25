import { useCallback, useEffect, useState } from 'react'
import { useI18n } from '../i18n/useT.js'
import {
  countConfirmedPicks,
  deleteSession,
  listCompletedSessions,
} from '../lib/draftPersistence.js'

function formatDate(timestamp, locale) {
  if (!timestamp) return ''
  return new Date(timestamp).toLocaleString(locale === 'es' ? 'es' : undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

export default function SessionHistoryPanel({
  open,
  onClose,
  onViewSession,
}) {
  const { t, tp, locale } = useI18n()
  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)
  const [deletingId, setDeletingId] = useState(null)

  const refresh = useCallback(async () => {
    setLoading(true)
    const list = await listCompletedSessions()
    setSessions(list)
    setLoading(false)
  }, [])

  useEffect(() => {
    if (!open) return
    refresh()
  }, [open, refresh])

  useEffect(() => {
    if (!open) return
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  async function handleDelete(sessionId) {
    setDeletingId(sessionId)
    await deleteSession(sessionId)
    await refresh()
    setDeletingId(null)
  }

  return (
    <div className="session-modal-overlay" role="presentation" onClick={onClose}>
      <div
        className="session-modal session-history-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="session-history-title"
        onClick={e => e.stopPropagation()}
      >
        <div className="session-modal-glow" aria-hidden="true" />
        <header className="session-modal-header">
          <span className="session-modal-eyebrow">{t('session.history.eyebrow')}</span>
          <h2 id="session-history-title" className="session-modal-title">
            {t('session.history.title')}
          </h2>
          <p className="session-modal-subtitle">{t('session.history.subtitle')}</p>
        </header>

        <div className="session-modal-body session-history-body">
          {loading ? (
            <p className="session-history-empty">{t('session.history.loading')}</p>
          ) : sessions.length === 0 ? (
            <p className="session-history-empty">{t('session.history.empty')}</p>
          ) : (
            <ul className="session-history-list">
              {sessions.map(session => {
                const picksDone = countConfirmedPicks(
                  session.draft.playerPicks,
                  session.config.playerCount,
                )
                return (
                  <li key={session.id} className="session-history-item">
                    <div className="session-history-item-main">
                      <h3 className="session-history-item-title">{session.config.cubeTitle}</h3>
                      <p className="session-history-item-meta">
                        {tp('session.history.picksSummary', picksDone, {
                          done: picksDone,
                          total: session.config.playerCount,
                        })}
                        {' · '}
                        {formatDate(session.updatedAt, locale)}
                      </p>
                    </div>
                    <div className="session-history-item-actions">
                      <button
                        type="button"
                        className="session-btn session-btn-primary session-btn-sm"
                        onClick={() => onViewSession(session)}
                      >
                        {t('session.history.view')}
                      </button>
                      <button
                        type="button"
                        className="session-btn session-btn-ghost session-btn-sm"
                        disabled={deletingId === session.id}
                        onClick={() => handleDelete(session.id)}
                      >
                        {deletingId === session.id ? t('session.history.deleting') : t('session.history.delete')}
                      </button>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <footer className="session-modal-footer">
          <button type="button" className="session-btn session-btn-secondary" onClick={onClose}>
            {t('session.history.close')}
          </button>
        </footer>
      </div>
    </div>
  )
}
