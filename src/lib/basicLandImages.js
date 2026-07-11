const BASIC_LAND_NAMES = new Set([
  'Plains', 'Island', 'Swamp', 'Mountain', 'Forest', 'Wastes',
])

const CUBE_SET_HINTS = [
  { pattern: /innistrad-remastered/i, set: 'inr' },
  { pattern: /dominaria-remastered/i, set: 'dmr' },
  { pattern: /dominaria-united/i, set: 'dmu' },
]

const _imageCache = new Map()

export function resetBasicLandImageCache() {
  _imageCache.clear()
}

export function isBasicLandName(name) {
  if (!name) return false
  if (BASIC_LAND_NAMES.has(name)) return true
  return name.startsWith('Snow-Covered ')
}

function normalizeSetCode(set) {
  const code = (set || '').trim().toLowerCase()
  if (!code) return ''
  if (code === 'dnr') return 'dmr'
  return code
}

function inferSetFromCube(cubeHandle) {
  const slug = (cubeHandle?.name || '').toLowerCase()
  for (const hint of CUBE_SET_HINTS) {
    if (hint.pattern.test(slug)) return hint.set
  }
  return ''
}

function parseTsvRows(tsvText) {
  if (!tsvText) return []
  const lines = tsvText.trim().split(/\r?\n/)
  if (lines.length < 2) return []

  const headers = lines[0].split('\t').map(h => h.trim())
  return lines.slice(1).map(line => {
    const values = line.split('\t')
    const row = {}
    for (let i = 0; i < headers.length; i++) {
      row[headers[i]] = values[i] ?? ''
    }
    return row
  })
}

function parseTsvLandContext(tsvText) {
  const landByName = {}
  const landSetCounts = {}
  const deckSetCounts = {}

  if (!tsvText) {
    return { landByName, defaultSet: '' }
  }

  const rows = parseTsvRows(tsvText)
  for (const row of rows) {
    const name = (row.name || row.Name || '').trim()
    const set = normalizeSetCode(row.Set || row.set || '')
    const imageUrl = (row['image URL'] || row.image_url || '').trim()

    if (set) {
      deckSetCounts[set] = (deckSetCounts[set] || 0) + 1
    }

    if (!isBasicLandName(name)) continue

    if (set) {
      landSetCounts[set] = (landSetCounts[set] || 0) + 1
    }

    const existing = landByName[name] || { set: '', image_url: '' }
    landByName[name] = {
      set: existing.set || set,
      image_url: existing.image_url || imageUrl,
    }
  }

  const defaultFromLands = Object.entries(landSetCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || ''
  const defaultFromDeck = Object.entries(deckSetCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || ''

  return {
    landByName,
    defaultSet: defaultFromLands || defaultFromDeck,
  }
}

async function fetchBasicLandImage(name, setCode) {
  const set = normalizeSetCode(setCode)
  if (!name || !set) return ''

  const cacheKey = `${set}/${name}`.toLowerCase()
  if (_imageCache.has(cacheKey)) return _imageCache.get(cacheKey)

  try {
    const params = new URLSearchParams({ exact: name, set })
    const res = await fetch(`https://api.scryfall.com/cards/named?${params}`)
    if (!res.ok) {
      _imageCache.set(cacheKey, '')
      return ''
    }

    const card = await res.json()
    const imageUrl = card.image_uris?.normal
      || card.card_faces?.[0]?.image_uris?.normal
      || ''

    _imageCache.set(cacheKey, imageUrl)
    return imageUrl
  } catch {
    _imageCache.set(cacheKey, '')
    return ''
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/** Attach set + image URLs to basic lands using deck.tsv and Scryfall. */
export async function enrichBasicLandImages(deckData, tsvText, cubeHandle) {
  if (!deckData) return deckData

  const { landByName, defaultSet: tsvDefaultSet } = parseTsvLandContext(tsvText)
  const cubeDefaultSet = inferSetFromCube(cubeHandle)
  const fallbackSet = tsvDefaultSet || cubeDefaultSet

  const boards = [
    ...(deckData.mainboard || []),
    ...(deckData.sideboard || []),
  ]

  const landSets = new Map()
  for (const card of boards) {
    if (!isBasicLandName(card.name)) continue
    const fromTsv = landByName[card.name]
    const set = normalizeSetCode(fromTsv?.set || card.set || fallbackSet)
    if (set) landSets.set(card.name, set)
  }

  const imageByName = {}
  let fetchIndex = 0
  for (const [name, set] of landSets) {
    const fromTsv = landByName[name]
    if (fromTsv?.image_url) {
      imageByName[name] = fromTsv.image_url
      continue
    }

    if (fetchIndex > 0) await delay(75)
    fetchIndex += 1
    const imageUrl = await fetchBasicLandImage(name, set)
    if (imageUrl) imageByName[name] = imageUrl
  }

  function apply(cards) {
    return (cards || []).map(card => {
      if (!isBasicLandName(card.name)) return card

      const fromTsv = landByName[card.name]
      const set = normalizeSetCode(fromTsv?.set || card.set || landSets.get(card.name) || fallbackSet)
      const imageUrl = imageByName[card.name] || fromTsv?.image_url || card.image_url || ''

      if (!set && !imageUrl) return card

      return {
        ...card,
        ...(set ? { set } : {}),
        ...(imageUrl ? { image_url: imageUrl } : {}),
      }
    })
  }

  deckData.mainboard = apply(deckData.mainboard)
  if (deckData.sideboard) {
    deckData.sideboard = apply(deckData.sideboard)
  }

  return deckData
}
