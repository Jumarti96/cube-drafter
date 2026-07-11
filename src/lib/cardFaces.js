const DFC_LAYOUTS = ['transform', 'modal_dfc', 'double_faced_token']
const SINGLE_IMAGE_LAYOUTS = ['split', 'adventure', 'flip', 'aftermath']

let _cardByName = {}

export function setCardByNameLookup(lookup) {
  _cardByName = lookup || {}
}

function lookupByName(name) {
  if (!name) return null
  return _cardByName[name] || null
}

/** Merge missing DFC/meld fields from the enriched lookup onto a sparse card object. */
export function mergeCardFromLookup(card) {
  if (!card?.name) return card || {}

  const entry = lookupByName(card.name)
  const merged = { ...card }

  if (entry) {
    const fields = [
      'scryfall_id', 'image_url', 'image_back_url', 'layout', 'card_faces',
      'set', 'power', 'toughness', 'oracle_text', 'mana_cost', 'type_line', 'rarity', 'cmc',
    ]
    for (const field of fields) {
      const current = merged[field]
      const incoming = entry[field]
      if ((current == null || current === '') && incoming != null && incoming !== '') {
        merged[field] = incoming
      }
    }
  }

  return merged
}

function scryfallImageUrl(scryfallId, face) {
  const sid = (scryfallId || '').trim()
  if (!sid) return ''
  return `https://cards.scryfall.io/normal/${face}/${sid[0]}/${sid[1]}/${sid}.jpg`
}

export function resolveFaceImageUrl(card, faceIndex) {
  const merged = mergeCardFromLookup(card)
  if (!merged) return ''

  if (faceIndex === 0) {
    const url = merged.image_url || ''
    if (url.trim()) return url.trim()
    return scryfallImageUrl(merged.scryfall_id, 'front')
  }

  const back = merged.image_back_url || ''
  if (back.trim()) return back.trim()
  return scryfallImageUrl(merged.scryfall_id, 'back')
}

function parseMeldResultFromOracle(oracleText) {
  const match = oracleText?.match(/meld them into ([^.]+)\./i)
  return match ? match[1].trim() : null
}

function parseMeldPartnerFromOracle(oracleText) {
  const match = oracleText?.match(/\(Melds with ([^.]+)\.\)/i)
  return match ? match[1].trim() : null
}

function isMeldHalf(card) {
  if (card?.layout !== 'meld') return false
  return !!(
    parseMeldResultFromOracle(card.oracle_text)
    || parseMeldPartnerFromOracle(card.oracle_text)
  )
}

function resolveMeldResultName(card) {
  const direct = parseMeldResultFromOracle(card.oracle_text)
  if (direct) return direct

  const partnerName = parseMeldPartnerFromOracle(card.oracle_text)
  if (partnerName) {
    const partner = lookupByName(partnerName)
    if (partner) return parseMeldResultFromOracle(partner.oracle_text)
  }
  return null
}

function isSingleImageLayout(card) {
  return SINGLE_IMAGE_LAYOUTS.includes(card?.layout)
}

function buildCombinedOracleText(card) {
  if (card.card_faces?.length >= 2) {
    return card.card_faces
      .map(face => {
        const name = face.name || ''
        const oracle = face.oracle_text || ''
        return name ? `${name}: ${oracle}` : oracle
      })
      .filter(Boolean)
      .join('\n\n')
  }
  return card.oracle_text || ''
}

export function isDoubleFaced(card) {
  const merged = mergeCardFromLookup(card)
  if (!merged) return false
  if (isSingleImageLayout(merged)) return false
  if (merged.layout === 'meld') return isMeldHalf(merged)
  if (DFC_LAYOUTS.includes(merged.layout)) return true
  if (merged.card_faces?.length >= 2) return true
  if (merged.name?.includes(' // ')) return true
  return false
}

function splitOracleByFaces(oracleText) {
  if (!oracleText) return ['', '']
  const parts = oracleText.split(/\n\/\/\n|\n\/\/|\/\/\n|\/\/ /)
  if (parts.length >= 2) {
    return [parts[0].trim(), parts.slice(1).join('//').trim()]
  }
  return [oracleText.trim(), '']
}

function buildFace(card, faceData, faceIndex, fallbackName) {
  return {
    name: faceData?.name || fallbackName || card.name || '',
    image_url: resolveFaceImageUrl(card, faceIndex),
    type_line: faceData?.type_line || card.type_line || '',
    oracle_text: faceData?.oracle_text || '',
    mana_cost: faceData?.mana_cost || '',
    power: faceData?.power ?? null,
    toughness: faceData?.toughness ?? null,
  }
}

function getMeldFaces(card) {
  const resultName = resolveMeldResultName(card)
  const resultCard = resultName ? mergeCardFromLookup(lookupByName(resultName)) : null

  const faces = [buildFace(card, card, 0, card.name)]
  if (resultCard?.name) {
    faces.push(buildFace(resultCard, resultCard, 0, resultCard.name))
  }
  return faces
}

export function getCardFaces(card) {
  if (!card) {
    return [{
      name: '',
      image_url: '',
      type_line: '',
      oracle_text: '',
      mana_cost: '',
      power: null,
      toughness: null,
    }]
  }

  const merged = mergeCardFromLookup(card)

  if (isSingleImageLayout(merged)) {
    return [{
      name: merged.name || '',
      image_url: resolveFaceImageUrl(merged, 0),
      type_line: merged.type_line || '',
      oracle_text: buildCombinedOracleText(merged),
      mana_cost: merged.mana_cost || '',
      power: merged.power ?? null,
      toughness: merged.toughness ?? null,
    }]
  }

  if (merged.layout === 'meld' && isMeldHalf(merged)) {
    const faces = getMeldFaces(merged)
    if (faces.length > 1) return faces
  }

  if (!isDoubleFaced(merged)) {
    return [buildFace(merged, merged, 0, merged.name)]
  }

  if (merged.card_faces?.length >= 2) {
    const names = (merged.name || '').split(' // ').map(n => n.trim())
    return merged.card_faces.map((face, i) =>
      buildFace(merged, face, i, names[i] || face.name)
    )
  }

  const names = (merged.name || '').split(' // ').map(n => n.trim())
  const [oracle0, oracle1] = splitOracleByFaces(merged.oracle_text || '')

  return [
    {
      name: names[0] || merged.name || '',
      image_url: resolveFaceImageUrl(merged, 0),
      type_line: merged.type_line || '',
      oracle_text: oracle0,
      mana_cost: merged.mana_cost || '',
      power: merged.power ?? null,
      toughness: merged.toughness ?? null,
    },
    {
      name: names[1] || names[0] || '',
      image_url: resolveFaceImageUrl(merged, 1),
      type_line: merged.type_line || '',
      oracle_text: oracle1,
      mana_cost: '',
      power: null,
      toughness: null,
    },
  ]
}
