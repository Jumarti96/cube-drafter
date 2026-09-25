import { useCallback, useEffect, useRef, useState } from 'react'
import {
  completeActiveSession,
  createSessionSnapshot,
  deleteActiveSession,
  loadActiveSession,
  saveActiveSession,
  saveSetupPrefs,
} from '../lib/draftPersistence.js'

const SAVE_DEBOUNCE_MS = 500

export function useDraftSession({
  enabled,
  config,
  phase,
  currentPlayer,
  playerPicks,
  draftComplete,
  displayedArchetypes,
  selectedArchetype,
  selectedDeck,
  loading,
}) {
  const [pendingSession, setPendingSession] = useState(null)
  const [sessionChecked, setSessionChecked] = useState(false)
  const [saveFailed, setSaveFailed] = useState(false)
  const sessionIdRef = useRef(null)
  const sessionCreatedAtRef = useRef(null)
  const saveTimerRef = useRef(null)
  const completedRef = useRef(false)

  useEffect(() => {
    let cancelled = false
    loadActiveSession()
      .then(session => {
        if (cancelled) return
        if (session) {
          sessionIdRef.current = session.id
          sessionCreatedAtRef.current = session.createdAt
          setPendingSession(session)
        }
        setSessionChecked(true)
      })
      .catch(() => {
        if (!cancelled) setSessionChecked(true)
      })
    return () => { cancelled = true }
  }, [])

  const buildSnapshot = useCallback(() => {
    if (!config?.cubeSlug) return null
    return createSessionSnapshot({
      config,
      phase,
      currentPlayer,
      playerPicks,
      draftComplete,
      displayedArchetypeKeys: (displayedArchetypes || []).map(a => a.key),
      selectedArchetypeKey: selectedArchetype?.key ?? null,
      selectedDeck,
      existingId: sessionIdRef.current,
      existingCreatedAt: sessionCreatedAtRef.current,
    })
  }, [
    config,
    phase,
    currentPlayer,
    playerPicks,
    draftComplete,
    displayedArchetypes,
    selectedArchetype,
    selectedDeck,
  ])

  useEffect(() => {
    if (!enabled || !config?.cubeSlug || loading) return

    if (draftComplete && !completedRef.current) {
      completedRef.current = true
      clearTimeout(saveTimerRef.current)
      completeActiveSession().catch(() => {})
      return
    }

    if (draftComplete) return

    const snapshot = buildSnapshot()
    if (!snapshot) return

    if (!sessionIdRef.current) {
      sessionIdRef.current = snapshot.id
      sessionCreatedAtRef.current = snapshot.createdAt
    }

    clearTimeout(saveTimerRef.current)
    saveTimerRef.current = setTimeout(async () => {
      if (completedRef.current) return
      const ok = await saveActiveSession(snapshot)
      if (!ok) setSaveFailed(true)
    }, SAVE_DEBOUNCE_MS)

    return () => clearTimeout(saveTimerRef.current)
  }, [enabled, config, phase, currentPlayer, playerPicks, draftComplete, loading, buildSnapshot])

  useEffect(() => {
    if (!draftComplete) {
      completedRef.current = false
    }
  }, [draftComplete])

  const discardPendingSession = useCallback(async () => {
    await deleteActiveSession()
    setPendingSession(null)
    sessionIdRef.current = null
    sessionCreatedAtRef.current = null
  }, [])

  const clearActiveSession = useCallback(async () => {
    clearTimeout(saveTimerRef.current)
    await deleteActiveSession()
    sessionIdRef.current = null
    sessionCreatedAtRef.current = null
    completedRef.current = false
  }, [])

  const acceptPendingSession = useCallback(() => {
    const session = pendingSession
    setPendingSession(null)
    return session
  }, [pendingSession])

  const initSessionFromRestore = useCallback((session) => {
    sessionIdRef.current = session.id
    sessionCreatedAtRef.current = session.createdAt
  }, [])

  const persistSetupPrefs = useCallback(async (prefs) => {
    await saveSetupPrefs(prefs)
  }, [])

  return {
    pendingSession,
    sessionChecked,
    saveFailed,
    discardPendingSession,
    clearActiveSession,
    acceptPendingSession,
    initSessionFromRestore,
    persistSetupPrefs,
  }
}
