import {
  STORES,
  idbDelete,
  idbGet,
  idbGetAll,
  idbGetAllKeys,
  idbPut,
} from './idb.js'
import { DEFAULT_UNCOMMON_BUDGET } from './deckConflicts.js'

export const ACTIVE_SESSION_KEY = 'active'
export const SETUP_PREFS_KEY = 'setup'

const MAX_UNCOMMON_BUDGET = 4

function normalizeUncommonBudget(value) {
  const n = Number(value)
  if (!Number.isFinite(n) || n < 1) return DEFAULT_UNCOMMON_BUDGET
  return Math.min(Math.floor(n), MAX_UNCOMMON_BUDGET)
}

function normalizeCubeRules(raw) {
  const out = {}
  for (const [slug, rules] of Object.entries(raw || {})) {
    if (!slug) continue
    out[slug] = {
      uncommonBudget: normalizeUncommonBudget(rules?.uncommonBudget),
      rareExclusive: rules?.rareExclusive !== false,
    }
  }
  return out
}
export const MAX_HISTORY = 20

const VALID_PHASES = new Set(['select', 'variations', 'deck', 'results'])
const VALID_STATUSES = new Set(['active', 'completed', 'abandoned'])

function normalizePlayerPicks(raw) {
  if (!raw || typeof raw !== 'object') return {}
  const out = {}
  for (const [key, value] of Object.entries(raw)) {
    if (!value?.archetypeKey || !value?.deck) continue
    out[String(key)] = {
      archetypeKey: String(value.archetypeKey),
      deck: String(value.deck),
    }
  }
  return out
}

export function createSessionSnapshot({
  config,
  phase,
  currentPlayer,
  playerPicks,
  draftComplete,
  displayedArchetypeKeys = [],
  selectedArchetypeKey = null,
  selectedDeck = null,
  existingId = null,
  existingCreatedAt = null,
}) {
  if (!config?.cubeSlug || !config?.cubeTitle) return null

  const now = Date.now()
  return {
    id: existingId || crypto.randomUUID(),
    status: 'active',
    createdAt: existingCreatedAt || now,
    updatedAt: now,
    config: {
      cubeSlug: String(config.cubeSlug),
      cubeTitle: String(config.cubeTitle),
      playerCount: Math.max(1, Math.min(8, Number(config.playerCount) || 2)),
      archetypesPerPlayer: Math.max(1, Math.min(6, Number(config.archetypesPerPlayer) || 4)),
      uncommonBudget: normalizeUncommonBudget(config.uncommonBudget),
      rareExclusive: config.rareExclusive !== false,
    },
    draft: {
      phase: VALID_PHASES.has(phase) ? phase : 'select',
      currentPlayer: Math.max(0, Number(currentPlayer) || 0),
      playerPicks: normalizePlayerPicks(playerPicks),
      draftComplete: Boolean(draftComplete),
      displayedArchetypeKeys: Array.isArray(displayedArchetypeKeys)
        ? displayedArchetypeKeys.map(String)
        : [],
      selectedArchetypeKey: selectedArchetypeKey ? String(selectedArchetypeKey) : null,
      selectedDeck: selectedDeck ? String(selectedDeck) : null,
    },
  }
}

export function isValidSession(session) {
  if (!session || typeof session !== 'object') return false
  if (!session.id || !session.config?.cubeSlug) return false
  if (!VALID_STATUSES.has(session.status)) return false
  if (!VALID_PHASES.has(session.draft?.phase)) return false
  return true
}

export async function loadActiveSession() {
  try {
    const session = await idbGet(STORES.sessions, ACTIVE_SESSION_KEY)
    if (!isValidSession(session) || session.status !== 'active') return null
    return session
  } catch {
    return null
  }
}

export async function saveActiveSession(snapshot) {
  if (!isValidSession(snapshot)) return false
  try {
    await idbPut(STORES.sessions, { ...snapshot, status: 'active', updatedAt: Date.now() }, ACTIVE_SESSION_KEY)
    return true
  } catch {
    return false
  }
}

export async function deleteActiveSession() {
  try {
    await idbDelete(STORES.sessions, ACTIVE_SESSION_KEY)
    return true
  } catch {
    return false
  }
}

async function trimHistory() {
  try {
    const keys = await idbGetAllKeys(STORES.sessions)
    const historyKeys = keys.filter(k => k !== ACTIVE_SESSION_KEY)
    if (historyKeys.length <= MAX_HISTORY) return

    const sessions = await idbGetAll(STORES.sessions)
    const completed = sessions
      .filter(s => s?.status === 'completed' && s.id)
      .sort((a, b) => (a.updatedAt || 0) - (b.updatedAt || 0))

    const toRemove = completed.slice(0, completed.length - MAX_HISTORY)
    await Promise.all(toRemove.map(s => idbDelete(STORES.sessions, s.id)))
  } catch {
    // ignore trim errors
  }
}

export async function completeActiveSession() {
  try {
    const session = await loadActiveSession()
    if (!session) return false

    const completed = {
      ...session,
      status: 'completed',
      updatedAt: Date.now(),
    }
    await idbPut(STORES.sessions, completed, session.id)
    await idbDelete(STORES.sessions, ACTIVE_SESSION_KEY)
    await trimHistory()
    return true
  } catch {
    return false
  }
}

export async function listCompletedSessions() {
  try {
    const sessions = await idbGetAll(STORES.sessions)
    return sessions
      .filter(s => s?.status === 'completed' && isValidSession(s))
      .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
  } catch {
    return []
  }
}

export async function deleteSession(sessionId) {
  if (!sessionId || sessionId === ACTIVE_SESSION_KEY) return false
  try {
    await idbDelete(STORES.sessions, sessionId)
    return true
  } catch {
    return false
  }
}

export async function loadSetupPrefs() {
  try {
    const prefs = await idbGet(STORES.prefs, SETUP_PREFS_KEY)
    if (!prefs?.cubeSlug) return null
    return {
      cubeSlug: String(prefs.cubeSlug),
      playerCount: Math.max(1, Math.min(8, Number(prefs.playerCount) || 2)),
      archetypesPerPlayer: Math.max(1, Math.min(6, Number(prefs.archetypesPerPlayer) || 4)),
      cubeRules: normalizeCubeRules(prefs.cubeRules),
      updatedAt: prefs.updatedAt || 0,
    }
  } catch {
    return null
  }
}

export async function saveSetupPrefs({
  cubeSlug,
  playerCount,
  archetypesPerPlayer,
  uncommonBudget,
  rareExclusive,
}) {
  if (!cubeSlug) return false
  try {
    // Conflict rules are remembered per cube: each physical cube has its own
    // number of copies, so one global value would be wrong for the others.
    const existing = await idbGet(STORES.prefs, SETUP_PREFS_KEY)
    const cubeRules = normalizeCubeRules(existing?.cubeRules)
    cubeRules[String(cubeSlug)] = {
      uncommonBudget: normalizeUncommonBudget(uncommonBudget),
      rareExclusive: rareExclusive !== false,
    }

    await idbPut(STORES.prefs, {
      cubeSlug: String(cubeSlug),
      playerCount: Math.max(1, Math.min(8, Number(playerCount) || 2)),
      archetypesPerPlayer: Math.max(1, Math.min(6, Number(archetypesPerPlayer) || 4)),
      cubeRules,
      updatedAt: Date.now(),
    }, SETUP_PREFS_KEY)
    return true
  } catch {
    return false
  }
}

export function countConfirmedPicks(playerPicks, playerCount) {
  let count = 0
  for (let i = 0; i < playerCount; i++) {
    if (playerPicks?.[i] || playerPicks?.[String(i)]) count++
  }
  return count
}
