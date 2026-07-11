import { useState, useEffect } from 'react'
import { getCardImageLookup } from '../lib/cubeData.js'
import { useT } from '../i18n/useT.js'

const FALLBACK_CARD = 'data:image/svg+xml,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="223" height="310" viewBox="0 0 223 310">
    <rect width="223" height="310" rx="12" fill="#1a1a24"/>
    <rect x="8" y="8" width="207" height="294" rx="8" fill="none" stroke="#333" stroke-width="1"/>
    <text x="111" y="155" text-anchor="middle" fill="#555" font-size="14" font-family="sans-serif">MTG</text>
  </svg>`
)

function resolveUrl(card) {
  const url = card?.image_url || ''
  if (url && url.trim()) return url.trim()

  const scryfallId = card?.scryfall_id || ''
  if (scryfallId && scryfallId.trim()) {
    return `https://cards.scryfall.io/normal/front/${scryfallId[0]}/${scryfallId[1]}/${scryfallId}.jpg`
  }

  const backUrl = card?.image_back_url || ''
  if (backUrl && backUrl.trim()) return backUrl.trim()

  return ''
}

function lookupUrl(name) {
  const lookup = getCardImageLookup()
  if (!lookup || !name) return ''
  const entry = lookup[name]
  if (!entry) return ''
  if (entry.image_url && entry.image_url.trim()) return entry.image_url.trim()
  if (entry.scryfall_id && entry.scryfall_id.trim()) {
    const sid = entry.scryfall_id
    return `https://cards.scryfall.io/normal/front/${sid[0]}/${sid[1]}/${sid}.jpg`
  }
  return ''
}

export default function CardImage({ card, onClick, size = 'normal' }) {
  const t = useT()
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)
  const [, setLookupTick] = useState(0)
  const fallbackLabel = t('card.fallback')

  useEffect(() => {
    setLookupTick(t => t + 1)
  }, [])

  const sizeClass = size === 'small' ? 'card-img-small' : size === 'large' ? 'card-img-large' : 'card-img-normal'
  let imageUrl = resolveUrl(card)
  if (!imageUrl && card?.name) {
    imageUrl = lookupUrl(card.name)
  }

  return (
    <div
      className={`card-image-wrapper ${sizeClass} ${onClick ? 'clickable' : ''}`}
      onClick={onClick ? () => onClick(card) : undefined}
      title={card?.name || fallbackLabel}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={card.name}
          className={`card-image ${loaded ? 'loaded' : 'loading'}`}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          loading="lazy"
        />
      ) : (
        <img src={FALLBACK_CARD} alt={fallbackLabel} className="card-image fallback" />
      )}
      {!loaded && !errored && imageUrl && (
        <div className="card-shimmer" />
      )}
      {!loaded && errored && imageUrl && (
        <img src={FALLBACK_CARD} alt={fallbackLabel} className="card-image fallback" />
      )}
      <div className="card-name-overlay">{card?.name || ''}</div>
    </div>
  )
}
