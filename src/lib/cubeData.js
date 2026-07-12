import { readTextFile, fileExists } from './fsAccess.js'
import { resolveFaceImageUrl, setCardByNameLookup } from './cardFaces.js'
import { enrichBasicLandImages, resetBasicLandImageCache } from './basicLandImages.js'

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

export function getColorCardCounts(deckData) {
  const counts = { W: 0, U: 0, B: 0, R: 0, G: 0, C: 0 }
  for (const card of deckData.mainboard || []) {
    if (card.board === 'sideboard') continue
    if (isLandCard(card)) continue
    const colors = card.colors?.length ? card.colors : (card.color_identity || [])
    if (!colors.length) counts.C += 1
    else for (const c of colors) if (c in counts) counts[c] += 1
  }
  return counts
}

export function getNonLandMainboardCount(deckData) {
  return (deckData.mainboard || []).filter(
    c => (!c.board || c.board === 'mainboard') && !isLandCard(c)
  ).length
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

  const analysisText = await readTextFile(deckDirHandle, 'analysis.md')
  const pitchEn = (deckData.pitch || '').trim() || extractPitchFromAnalysis(analysisText)
  const pitchEs = (deckData.pitch_es || '').trim()

  const mainboard = deckData.mainboard || []
  const mainDeck = mainboard.filter(c => !c.board || c.board === 'mainboard')
  const nonLand = []
  const seen = new Set()
  let nonLandCount = 0

  for (const raw of mainDeck) {
    const card = enrichCard(raw, enriched)
    const name = card.name || ''
    if (!name || isLandCard(card)) continue

    nonLandCount += 1
    if (!seen.has(name)) {
      seen.add(name)
      nonLand.push({
        name,
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
  }

  const landCards = []
  const seenLands = new Set()
  for (const raw of mainDeck) {
    const card = enrichCard(raw, enriched)
    const name = card.name || ''
    if (isLandCard(card) && !seenLands.has(name)) {
      seenLands.add(name)
      const count = mainDeck.filter(c => c.name === name).length
      landCards.push({
        name,
        count,
        type_line: card.type_line || '',
        image_url: resolveImageUrl(card),
      })
    }
  }

  const rareMythic = new Set()
  const uncommonCounts = {}
  for (const raw of mainDeck) {
    const card = enrichCard(raw, enriched)
    const name = card.name || ''
    if (!name) continue
    const rarity = (card.rarity || '').toLowerCase()
    if (rarity === 'rare' || rarity === 'mythic') {
      rareMythic.add(name)
    } else if (rarity === 'uncommon') {
      uncommonCounts[name] = (uncommonCounts[name] || 0) + 1
    }
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

    const colorSet = new Set()
    for (const deckName of valid) {
      for (const c of parseManaColors(deckSummaries[deckName]?.colors)) {
        colorSet.add(c)
      }
    }

    const colorsRaw = row.colors || ''
    const displayColors = colorsRaw.includes('(')
      ? colorsRaw.split('(')[0].trim()
      : colorsRaw.trim()
    const resolvedColors = colorSet.size > 0
      ? MANA_COLOR_ORDER.filter(c => colorSet.has(c)).join('')
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
      sample_cards: [],
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
    const metaText = await readTextFile(handle, 'meta.json')
    if (metaText) {
      try {
        const meta = JSON.parse(metaText)
        title = meta.title || name
      } catch {
        // keep slug as title
      }
    }

    cubes.push({ slug: name, title, handle })
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
