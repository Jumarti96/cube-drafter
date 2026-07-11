const UNCOMMON_SESSION_BUDGET = 2

/**
 * Aggregate rare/mythic names and uncommon copy counts from confirmed picks.
 * @param {Record<string|number, { deck?: string }>} playerPicks
 * @param {Record<string, { conflict_inventory?: { rare_mythic?: string[], uncommon_counts?: Record<string, number> } }>} deckSummaries
 */
export function aggregateSessionInventory(playerPicks, deckSummaries) {
  const rareMythic = new Set()
  const uncommonCounts = {}

  for (const pick of Object.values(playerPicks || {})) {
    const slug = pick?.deck
    if (!slug) continue
    const inv = deckSummaries?.[slug]?.conflict_inventory
    if (!inv) continue

    for (const name of inv.rare_mythic || []) {
      rareMythic.add(name)
    }
    for (const [name, count] of Object.entries(inv.uncommon_counts || {})) {
      uncommonCounts[name] = (uncommonCounts[name] || 0) + count
    }
  }

  return { rareMythic, uncommonCounts }
}

/**
 * @returns {boolean} true if the candidate deck conflicts with the session inventory
 */
export function deckConflicts(candidateSlug, sessionInv, deckSummaries) {
  const inv = deckSummaries?.[candidateSlug]?.conflict_inventory
  if (!inv) return false

  for (const name of inv.rare_mythic || []) {
    if (sessionInv.rareMythic.has(name)) return true
  }

  for (const [name, count] of Object.entries(inv.uncommon_counts || {})) {
    const taken = sessionInv.uncommonCounts[name] || 0
    if (taken + count > UNCOMMON_SESSION_BUDGET) return true
  }

  return false
}

/**
 * Archetypes available for the current player, with decks already filtered.
 * - Drops archetypes that list any already-selected deck slug
 * - Drops decks that conflict on rare/mythic or uncommon budget
 * - Drops archetypes left with zero valid decks
 */
export function getAvailableArchetypes(archetypes, playerPicks, deckSummaries) {
  const selectedDecks = new Set()
  for (const pick of Object.values(playerPicks || {})) {
    if (pick?.deck) selectedDecks.add(pick.deck)
  }

  const sessionInv = aggregateSessionInventory(playerPicks, deckSummaries)
  const result = []

  for (const archetype of archetypes || []) {
    const decks = archetype.decks || []
    if (decks.some(slug => selectedDecks.has(slug))) continue

    const validDecks = decks.filter(slug => {
      if (selectedDecks.has(slug)) return false
      if (!deckSummaries?.[slug]) return false
      return !deckConflicts(slug, sessionInv, deckSummaries)
    })

    if (validDecks.length === 0) continue

    result.push({ ...archetype, decks: validDecks })
  }

  return result
}
