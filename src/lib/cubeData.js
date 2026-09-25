import { readTextFile, fileExists } from './fsAccess.js'
import { resolveFaceImageUrl, setCardByNameLookup } from './cardFaces.js'
import { enrichBasicLandImages, resetBasicLandImageCache } from './basicLandImages.js'
import { DEFAULT_UNCOMMON_BUDGET } from './deckConflicts.js'

let _cardImageLookup = {}
let _enrichedCacheKey = null
let _enrichedLookup = null
const _deckCache = new Map()

export function resetCubeCaches() {
  _enrichedCacheKey = null
  _enrichedLookup = null
  _deckCache.clear()
  resetBasicLandImageCache()
}

export function isValidDeckData(data) {
  return Boolean(
    data
    && Array.isArray(data.mainboard)
    && data.mainboard.length > 0,
  )
}

export function setCardImageLookup(lookup) {
  _cardImageLookup = lookup || {}
}

export function getCardImageLookup() {
  return _cardImageLookup
}

/** RFC-4180 CSV parser → array of row objects */
export function parseCSV(text) {
  if (!text) return []
  const rows = []
  let i = 0
  const len = text.length

  function parseField() {
    if (i >= len) return ''
    if (text[i] === '"') {
      i++
      let field = ''
      while (i < len) {
        if (text[i] === '"') {
          if (text[i + 1] === '"') {
            field += '"'
            i += 2
          } else {
            i++
            break
          }
        } else {
          field += text[i++]
        }
      }
      if (text[i] === ',') i++
      return field
    }
    let field = ''
    while (i < len && text[i] !== ',' && text[i] !== '\n' && text[i] !== '\r') {
      field += text[i++]
    }
    if (text[i] === ',') i++
    return field
  }

  function parseRow() {
    if (i >= len) return null
    const fields = []
    while (i < len) {
      if (text[i] === '\n' || text[i] === '\r') break
      fields.push(parseField())
    }
    if (text[i] === '\r') i++
    if (text[i] === '\n') i++
    return fields.length ? fields : null
  }

  const headerFields = parseRow()
  if (!headerFields) return []

  const headers = headerFields.map(h => h.trim())
  let rowFields = parseRow()
  while (rowFields) {
    const row = {}
    for (let j = 0; j < headers.length; j++) {
      row[headers[j]] = rowFields[j] ?? ''
    }
    rows.push(row)
    rowFields = parseRow()
  }
  return rows
}

export function resolveImageUrl(card) {
  return resolveFaceImageUrl(card, 0)
}

const MANA_COLOR_ORDER = ['W', 'U', 'B', 'R', 'G']
const VALID_MANA_COLORS = new Set(MANA_COLOR_ORDER)

/** Extract WUBRG from strings like "UR", "U (R splash)", or "WUBRG". */
export function parseManaColors(colors) {
  if (!colors) return []
  const str = typeof colors === 'string' ? colors : Array.isArray(colors) ? colors.join('') : ''
  const found = new Set()
  for (const c of str.toUpperCase()) {
    if (VALID_MANA_COLORS.has(c)) found.add(c)
  }
  return MANA_COLOR_ORDER.filter(c => found.has(c))
}

export function formatManaColors(colors) {
  return parseManaColors(colors).join('')
}

const BASIC_LAND_NAMES = new Set(['Plains', 'Island', 'Swamp', 'Mountain', 'Forest', 'Wastes'])

export function isLandCard(card) {
  const tl = card?.type_line || ''
  if (tl.includes('Land')) return true
  const name = card?.name || ''
  return BASIC_LAND_NAMES.has(name) || name.startsWith('Snow-Covered ')
}

/** Physical copies represented by a single card row. */
export function cardQty(card) {
  const qty = Number(card?.qty)
  return Number.isFinite(qty) && qty > 0 ? Math.floor(qty) : 1
}

/**
 * Group card rows by name, one entry per card with a physical `count`.
 *
 * Deck exports are inconsistent: some repeat a row per copy, some carry a single
 * row with `qty`, and some do both — two rows that each say `qty: 2` still mean
 * two copies, not four. Taking the larger of the two signals is right for all
 * three shapes.
 */
export function groupCardsByName(cards) {
  const map = new Map()
  for (const card of cards || []) {
    const name = card?.name || ''
    if (!name) continue
    const entry = map.get(name)
    if (entry) {
      entry.rows += 1
      entry.maxQty = Math.max(entry.maxQty, cardQty(card))
    } else {
      map.set(name, { card, rows: 1, maxQty: cardQty(card) })
    }
  }
  return [...map.values()].map(({ card, rows, maxQty }) => ({
    ...card,
    count: Math.max(rows, maxQty),
  }))
}

/**
 * Group several named boards into one list, keeping both the total copy count
 * and where those copies came from.
 *
 * Boards are grouped independently first: the same card in the mainboard and
 * the sideboard is two separate physical sets of copies, so a 2-of in the deck
 * plus a 1-of in the sideboard is three cards to find, not two.
 *
 * @param {Record<string, Array>} boards board name -> card rows
 * @returns {Array} one entry per name, with `count` and `counts[boardName]`
 */
export function groupCardsAcrossBoards(boards) {
  const merged = new Map()
  for (const [boardName, cards] of Object.entries(boards || {})) {
    for (const card of groupCardsByName(cards)) {
      let entry = merged.get(card.name)
      if (!entry) {
        entry = { ...card, count: 0, counts: {} }
        merged.set(card.name, entry)
      }
      entry.count += card.count
      entry.counts[boardName] = (entry.counts[boardName] || 0) + card.count
    }
  }
  return [...merged.values()]
}

/** Total physical copies across the given rows. */
export function countCards(cards) {
  let total = 0
  for (const card of groupCardsByName(cards)) total += card.count
  return total
}

export function getMainboardCards(deckData) {
  return (deckData?.mainboard || []).filter(c => !c.board || c.board === 'mainboard')
}

export function getSideboardCards(deckData) {
  return [
    ...(deckData?.mainboard || []).filter(c => c.board === 'sideboard'),
    ...(deckData?.sideboard || []),
  ]
}

export function getColorCardCounts(deckData) {
  const counts = { W: 0, U: 0, B: 0, R: 0, G: 0, C: 0 }
  for (const card of groupCardsByName(getMainboardCards(deckData))) {
    if (isLandCard(card)) continue
    const colors = card.colors?.length ? card.colors : (card.color_identity || [])
    if (!colors.length) counts.C += card.count
    else for (const c of colors) if (c in counts) counts[c] += card.count
  }
  return counts
}

export function getNonLandMainboardCount(deckData) {
  return countCards(getMainboardCards(deckData).filter(c => !isLandCard(c)))
}

export function enrichCard(card, lookup) {
  const result = { ...card }
  const match = lookup?.[card?.name]
  if (!match) return result

  const fields = [
    'scryfall_id', 'image_url', 'image_back_url', 'layout', 'card_faces',
    'set', 'power', 'toughness', 'oracle_text', 'mana_cost', 'type_line', 'rarity', 'cmc',
  ]
  for (const field of fields) {
    const current = result[field]
    const incoming = match[field]
    if ((current == null || current === '') && incoming != null && incoming !== '') {
      result[field] = incoming
    }
  }
  if (!(result.image_url || '').trim()) {
    result.image_url = resolveImageUrl(result)
  }
  return result
}

export async function loadEnriched(cubeHandle) {
  const key = cubeHandle?.name ?? ''
  if (key && _enrichedCacheKey === key && _enrichedLookup) {
    return _enrichedLookup
  }

  const text = await readTextFile(cubeHandle, 'enriched.json')
  if (!text) return {}

  try {
    const data = JSON.parse(text)
    const lookup = {}
    for (const card of data.cards || []) {
      const name = card.name || ''
      if (name) lookup[name] = card
    }
    if (key) {
      _enrichedCacheKey = key
      _enrichedLookup = lookup
    }
    return lookup
  } catch {
    return {}
  }
}

export function buildCardImageLookup(enriched) {
  const lookup = {}
  for (const [name, card] of Object.entries(enriched)) {
    lookup[name] = {
      image_url: resolveImageUrl(card),
      scryfall_id: card.scryfall_id || '',
      image_back_url: card.image_back_url || '',
    }
  }
  return lookup
}

/** First prose paragraph under ## ANALYSIS */
export function extractPitchFromAnalysis(text) {
  if (!text) return ''

  let body = text
  if (text.startsWith('---')) {
    const end = text.indexOf('---', 3)
    if (end !== -1) body = text.slice(end + 3)
  }

  const headerMatch = body.match(/^##\s+ANALYSIS\s*$/m)
  if (!headerMatch) return ''

  let section = body.slice(headerMatch.index + headerMatch[0].length)
  const nextHeader = section.search(/^##\s/m)
  if (nextHeader !== -1) section = section.slice(0, nextHeader)

  const paragraphs = section
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(p => p && !p.startsWith('```') && !p.startsWith('###'))

  if (!paragraphs.length) return ''

  return paragraphs[0]
    .replace(/\*\*/g, '')
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

async function buildDeckSummary(deckDirHandle, deckName, enriched) {
  const deckText = await readTextFile(deckDirHandle, 'deck.json')
  if (!deckText) return null

  let deckData
  try {
    deckData = JSON.parse(deckText)
  } catch {
    return null
  }

  // Only fall back to analysis.md when deck.json carries no pitch. At ~120 decks
  // per cube that read would otherwise cost a second file per deck on every load.
  let pitchEn = (deckData.pitch || '').trim()
  if (!pitchEn) {
    pitchEn = extractPitchFromAnalysis(await readTextFile(deckDirHandle, 'analysis.md'))
  }
  const pitchEs = (deckData.pitch_es || '').trim()

  // One pass over grouped rows: `count` is the physical copy count, so lands,
  // the non-land tally and the conflict inventory all agree with the deck list.
  const grouped = groupCardsByName(getMainboardCards(deckData))
    .map(card => enrichCard(card, enriched))

  const nonLand = []
  const landCards = []
  const rareMythic = new Set()
  const uncommonCounts = {}
  let nonLandCount = 0

  for (const card of grouped) {
    const name = card.name || ''
    if (!name) continue

    const rarity = (card.rarity || '').toLowerCase()
    if (rarity === 'rare' || rarity === 'mythic') {
      rareMythic.add(name)
    } else if (rarity === 'uncommon') {
      uncommonCounts[name] = (uncommonCounts[name] || 0) + card.count
    }

    if (isLandCard(card)) {
      landCards.push({
        name,
        count: card.count,
        type_line: card.type_line || '',
        image_url: resolveImageUrl(card),
      })
      continue
    }

    nonLandCount += card.count
    nonLand.push({
      name,
      count: card.count,
      cmc: card.cmc ?? 0,
      type_line: card.type_line || '',
      mana_cost: card.mana_cost || '',
      rarity: card.rarity || '',
      image_url: resolveImageUrl(card),
      colors: card.colors || [],
      oracle_text: card.oracle_text || '',
      scryfall_id: card.scryfall_id || '',
      image_back_url: card.image_back_url || '',
      layout: card.layout || '',
      card_faces: card.card_faces || null,
      power: card.power ?? null,
      toughness: card.toughness ?? null,
      set: card.set || '',
    })
  }

  return {
    name: deckName,
    display_name: deckName.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    colors: deckData.colors || '',
    strategy: {
      en: (deckData.strategy || '').trim(),
      es: (deckData.strategy_es || '').trim(),
    },
    identity: {
      en: (deckData.identity || '').trim(),
      es: (deckData.identity_es || '').trim(),
    },
    format: deckData.format || '40-card',
    pitch: {
      en: pitchEn,
      es: pitchEs,
    },
    mana_audit: {
      avg_cmc: deckData.mana_audit?.avg_cmc ?? 0,
      land_count: deckData.mana_audit?.land_count ?? 0,
    },
    non_land_cards: nonLand,
    non_land_count: nonLandCount,
    land_cards: landCards,
    conflict_inventory: {
      rare_mythic: [...rareMythic],
      uncommon_counts: uncommonCounts,
    },
  }
}

export async function getDeckSummaries(cubeHandle) {
  let decksDir
  try {
    decksDir = await cubeHandle.getDirectoryHandle('decks')
  } catch {
    return {}
  }

  const enriched = await loadEnriched(cubeHandle)
  const summaries = {}
  const tasks = []

  for await (const [name, handle] of decksDir.entries()) {
    if (handle.kind !== 'directory' || name.startsWith('ignore')) continue
    tasks.push(
      buildDeckSummary(handle, name, enriched).then(summary => {
        if (summary) summaries[name] = summary
      })
    )
  }

  await Promise.all(tasks)
  return summaries
}

export async function loadArchetypesCsv(cubeHandle) {
  const text = await readTextFile(cubeHandle, 'archetypes.csv')
  if (!text) return []
  return parseCSV(text)
}

/** A colour must appear in this share of an archetype's decks to be one of its colours. */
const ARCHETYPE_COLOR_SHARE = 0.4

/**
 * The colours an archetype actually plays, rather than every colour any of its
 * decks touches — one off-colour splash deck should not repaint the archetype.
 * Always keeps the most common colour so the result is never empty.
 */
export function summarizeArchetypeColors(colorCounts, deckCount) {
  if (!deckCount) return ''
  const threshold = deckCount * ARCHETYPE_COLOR_SHARE
  const kept = MANA_COLOR_ORDER.filter(c => (colorCounts[c] || 0) >= threshold)
  if (kept.length) return kept.join('')

  const best = MANA_COLOR_ORDER.reduce(
    (a, c) => ((colorCounts[c] || 0) > (colorCounts[a] || 0) ? c : a),
    MANA_COLOR_ORDER[0],
  )
  return (colorCounts[best] || 0) > 0 ? best : ''
}

/**
 * Cards that identify an archetype, for the three images on its card.
 *
 * The CSV already names them: `keystones` are the defining cards and
 * `core_cards` the supporting suite. Preferring those over "whatever the first
 * deck happens to run" keeps the images on-theme and matches the "Key cards: …"
 * text in the description, which is built from the same list.
 */
export function pickArchetypeSampleCards(row, deckNames, deckSummaries, limit = 3) {
  const byName = new Map()
  const deckHits = new Map()

  for (const deckName of deckNames) {
    for (const card of deckSummaries[deckName]?.non_land_cards || []) {
      const name = card?.name
      if (!name) continue
      if (!byName.has(name)) byName.set(name, card)
      deckHits.set(name, (deckHits.get(name) || 0) + 1)
    }
  }

  const named = field => (row[field] || '')
    .split(';')
    .map(s => s.trim())
    .filter(Boolean)

  const picks = []
  const seen = new Set()
  const add = (name) => {
    if (picks.length >= limit || seen.has(name)) return
    const card = byName.get(name)
    if (!card || !(card.image_url || '').trim()) return
    seen.add(name)
    picks.push(card)
  }

  // 1. Keystones, in the order the cube author listed them.
  for (const name of named('keystones')) add(name)

  // 2. Core cards, most widely shared across the archetype's decks first.
  if (picks.length < limit) {
    const core = named('core_cards')
      .filter(n => byName.has(n))
      .sort((a, b) => (deckHits.get(b) || 0) - (deckHits.get(a) || 0))
    for (const name of core) add(name)
  }

  // 3. Whatever the decks most agree on, rares first — a floor, rarely reached.
  if (picks.length < limit) {
    const rest = [...byName.values()]
      .filter(c => !seen.has(c.name))
      .sort((a, b) => {
        const hits = (deckHits.get(b.name) || 0) - (deckHits.get(a.name) || 0)
        if (hits !== 0) return hits
        const rank = c => (c.rarity === 'mythic' || c.rarity === 'rare' ? 1 : 0)
        return rank(b) - rank(a)
      })
    for (const card of rest) add(card.name)
  }

  return picks
}

export function buildArchetypes(csvRows, deckSummaries) {
  if (!csvRows.length || !Object.keys(deckSummaries).length) return []

  const allDeckNames = new Set(Object.keys(deckSummaries))
  const archetypes = []

  for (const row of csvRows) {
    const name = row.archetype || ''
    const explicit = (row.decks || '')
      .split(';')
      .map(d => d.trim())
      .filter(Boolean)
    const valid = explicit.filter(d => allDeckNames.has(d))
    if (!valid.length) continue

    const colorCounts = {}
    for (const deckName of valid) {
      for (const c of parseManaColors(deckSummaries[deckName]?.colors)) {
        colorCounts[c] = (colorCounts[c] || 0) + 1
      }
    }

    const colorsRaw = row.colors || ''
    const displayColors = colorsRaw.includes('(')
      ? colorsRaw.split('(')[0].trim()
      : colorsRaw.trim()
    const resolvedColors = Object.keys(colorCounts).length > 0
      ? summarizeArchetypeColors(colorCounts, valid.length)
      : formatManaColors(displayColors)

    const pitchEn = (row.pitch || '').trim()
    const pitchEs = (row.pitch_es || '').trim()
    const rationaleEn = (row.rationale || '').trim()
    const rationaleEs = (row.rationale_es || '').trim()
    const themesEn = (row.key_themes || '').trim()
    const themesEs = (row.key_themes_es || '').trim()
    const keystones = row.keystones || ''

    function buildDesc(pitch, rationale, themes, keyCardsPrefix) {
      if (pitch) return pitch
      const parts = []
      if (rationale) parts.push(rationale)
      if (keystones) {
        const ks = keystones.split(';').map(k => k.trim()).filter(Boolean).slice(0, 4)
        if (ks.length) parts.push(`${keyCardsPrefix} ${ks.join(', ')}.`)
      }
      return parts.join(' ') || themes
    }

    // Only set ES description when real Spanish prose exists. A keystones-only
    // "Cartas clave: ..." string would otherwise block fallback to the EN pitch.
    const descEn = buildDesc(pitchEn, rationaleEn, themesEn, 'Key cards:')
    const descEs = (pitchEs || rationaleEs)
      ? buildDesc(pitchEs, rationaleEs, themesEs, 'Cartas clave:')
      : ''

    archetypes.push({
      id: name.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and'),
      name: `${name} (${resolvedColors})`,
      key: name,
      colors: resolvedColors,
      description: {
        en: descEn,
        es: descEs,
      },
      theme: {
        en: themesEn,
        es: themesEs,
      },
      deck_count: valid.length,
      decks: [...valid].sort(),
      sample_cards: pickArchetypeSampleCards(row, valid, deckSummaries),
    })
  }

  return archetypes
}

export async function getDeck(cubeHandle, deckName) {
  const cacheKey = `${cubeHandle?.name ?? ''}/${deckName}`
  if (_deckCache.has(cacheKey)) {
    return _deckCache.get(cacheKey)
  }

  try {
    const decksDir = await cubeHandle.getDirectoryHandle('decks')
    const deckDir = await decksDir.getDirectoryHandle(deckName)

    let jsonText = await readTextFile(deckDir, 'deck.json')
    if (!jsonText) {
      await new Promise(r => setTimeout(r, 100))
      jsonText = await readTextFile(deckDir, 'deck.json')
    }
    if (!jsonText) return null

    const data = JSON.parse(jsonText)
    if (!isValidDeckData(data)) return null

    const [tsvText, analysisText, mwDeckText, enriched] = await Promise.all([
      readTextFile(deckDir, 'deck.tsv'),
      readTextFile(deckDir, 'analysis.md'),
      readTextFile(deckDir, 'deck.mwDeck'),
      loadEnriched(cubeHandle),
    ])

    data.mainboard = data.mainboard.map(c => enrichCard(c, enriched))
    if (data.sideboard) {
      data.sideboard = data.sideboard.map(c => enrichCard(c, enriched))
    }

    await enrichBasicLandImages(data, tsvText, cubeHandle)

    data.deckTsv = tsvText || ''
    data.analysisMd = analysisText || ''
    data.deckMwDeck = mwDeckText || ''

    _deckCache.set(cacheKey, data)
    return data
  } catch (err) {
    console.error(`getDeck failed for "${deckName}":`, err)
    return null
  }
}

export async function listCubes(cubesDirHandle) {
  const cubes = []

  for await (const [name, handle] of cubesDirHandle.entries()) {
    if (handle.kind !== 'directory' || name.startsWith('.')) continue
    const hasMainboard = await fileExists(handle, 'mainboard.csv')
    if (!hasMainboard) continue

    let title = name
    let uncommonCopies = DEFAULT_UNCOMMON_BUDGET
    const metaText = await readTextFile(handle, 'meta.json')
    if (metaText) {
      try {
        const meta = JSON.parse(metaText)
        title = meta.title || name
        const copies = Number(meta.uncommon_copies)
        if (Number.isFinite(copies) && copies > 0) uncommonCopies = Math.floor(copies)
      } catch {
        // keep slug as title
      }
    }

    cubes.push({ slug: name, title, uncommonCopies, handle })
  }

  cubes.sort((a, b) => a.slug.localeCompare(b.slug))
  return cubes
}

export async function loadCubeData(cubeHandle) {
  resetCubeCaches()
  const enriched = await loadEnriched(cubeHandle)
  setCardByNameLookup(enriched)
  const cardImageLookup = buildCardImageLookup(enriched)
  setCardImageLookup(cardImageLookup)

  const deckSummaries = await getDeckSummaries(cubeHandle)
  const csvRows = await loadArchetypesCsv(cubeHandle)
  const archetypes = buildArchetypes(csvRows, deckSummaries)

  return { archetypes, deckSummaries, cardImageLookup }
}
