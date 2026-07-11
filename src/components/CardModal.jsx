import { useState, useEffect } from 'react'
import { getCardFaces } from '../lib/cardFaces.js'
import { ManaCost, ManaText } from './ManaSymbols.jsx'
import { useT } from '../i18n/useT.js'

function hasPowerToughness(face) {
  return face?.power != null && face.power !== ''
    && face?.toughness != null && face.toughness !== ''
}

export default function CardModal({ card, onClose }) {
  const t = useT()
  const [faceIndex, setFaceIndex] = useState(0)

  useEffect(() => {
    setFaceIndex(0)
  }, [card?.name])

  if (!card) return null

  const faces = getCardFaces(card)
  const active = faces[faceIndex] || faces[0]
  const isDfc = faces.length > 1
  const oracleLines = active.oracle_text?.split('\n').filter(Boolean) || []

  function toggleFace(e) {
    e?.stopPropagation?.()
    if (isDfc) setFaceIndex(i => (i + 1) % faces.length)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-layout">
          <div className="modal-image">
            {isDfc ? (
              <>
                <div
                  className="modal-flip-container"
                  onClick={toggleFace}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') toggleFace(e) }}
                  aria-label={t('card.flip')}
                >
                  <div className={`modal-flip-inner ${faceIndex === 1 ? 'flipped' : ''}`}>
                    <div className="modal-flip-face modal-flip-front">
                      {faces[0].image_url ? (
                        <img src={faces[0].image_url} alt={faces[0].name} className="modal-card-img" />
                      ) : (
                        <div className="modal-card-placeholder"><span>{faces[0].name}</span></div>
                      )}
                    </div>
                    <div className="modal-flip-face modal-flip-back">
                      {faces[1].image_url ? (
                        <img src={faces[1].image_url} alt={faces[1].name} className="modal-card-img" />
                      ) : (
                        <div className="modal-card-placeholder"><span>{faces[1].name}</span></div>
                      )}
                    </div>
                  </div>
                </div>
                <button type="button" className="modal-flip-btn" onClick={toggleFace}>
                  {t('card.flip')}
                </button>
                <p className="modal-face-indicator">{active.name}</p>
              </>
            ) : active.image_url ? (
              <img src={active.image_url} alt={active.name} className="modal-card-img" />
            ) : (
              <div className="modal-card-placeholder">
                <span>{active.name}</span>
              </div>
            )}
          </div>

          <div className="modal-info">
            <h2 className="modal-card-name">{active.name}</h2>
            <p className="modal-typline">{active.type_line}</p>
            {active.mana_cost && (
              <p className="modal-mana">
                <ManaCost cost={active.mana_cost} />
              </p>
            )}

            {oracleLines.length > 0 && (
              <div className="modal-oracle">
                {oracleLines.map((line, i) => (
                  <p key={i}><ManaText text={line} size="sm" /></p>
                ))}
              </div>
            )}

            {hasPowerToughness(active) && (
              <div className="modal-pt">{active.power}/{active.toughness}</div>
            )}

            <div className="modal-meta">
              {card.rarity && <span className={`rarity-badge rarity-${card.rarity.toLowerCase()}`}>{card.rarity}</span>}
              {card.set && <span className="set-badge">{card.set.toUpperCase()}</span>}
              {card.cmc !== undefined && <span className="cmc-badge">CMC {card.cmc}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
