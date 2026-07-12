import { useState } from 'react'
import CardCarousel from './CardCarousel'
import { ColorPips, colorToHex } from './ColorPips'
import { parseManaColors } from '../lib/cubeData.js'
import { useI18n } from '../i18n/useT.js'
import { pickLocalized } from '../i18n/localized.js'

function PitchText({ text }) {
  const { t } = useI18n()
  const [expanded, setExpanded] = useState(false)
  if (!text) return null

  return (
    <div className="variation-pitch">
      <p className={`variation-pitch-text ${expanded ? 'expanded' : 'clamped'}`}>
        {text}
      </p>
      {text.length > 120 && (
        <button
          type="button"
          className="variation-pitch-toggle"
          onClick={e => { e.stopPropagation(); setExpanded(v => !v) }}
        >
          {expanded ? t('variations.showLess') : t('variations.showMore')}
        </button>
      )}
    </div>
  )
}

export default function DeckVariations({ archetype, deckSummaries, onSelect, onCardClick }) {
  const { t, tp, locale } = useI18n()
  const deckNames = archetype.decks || []

  function handleSelect(deckName) {
    onSelect(deckName)
  }

  return (
    <div className="phase-section variations-phase">
      <div className="variations-phase-header">
        <span className="variations-phase-eyebrow">{t('variations.eyebrow')}</span>
        <h2 className="variations-phase-title">
          {t('variations.title')} <span className="highlight">{archetype.name}</span>
        </h2>
        <p className="variations-phase-subtitle">
          {tp('variations.subtitle', deckNames.length)}
        </p>
      </div>

      <div className="variations-grid">
        {deckNames.map((deckName, index) => {
          const deck = deckSummaries[deckName]
          if (!deck) return null

          const nonLands = deck.non_land_cards || []
          const colors = parseManaColors(deck.colors)
          const accent = colors.length ? colorToHex(colors[0]) : '#d4a843'

          const keyCards = (() => {
            const rares = nonLands.filter(c => c.rarity === 'rare' || c.rarity === 'mythic')
            const others = nonLands.filter(c => c.rarity !== 'rare' && c.rarity !== 'mythic' && c.image_url)
            const seen = new Set()
            const picks = []
            for (const c of [...rares, ...others]) {
              if (!c.image_url || seen.has(c.name)) continue
              seen.add(c.name)
              picks.push(c)
              if (picks.length >= 10) break
            }
            return picks
          })()

          return (
            <article
              key={deckName}
              className="variation-card"
              style={{
                '--variation-accent': accent,
                animationDelay: `${index * 0.07}s`,
              }}
              role="button"
              tabIndex={0}
              onClick={() => handleSelect(deckName)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleSelect(deckName)
                }
              }}
            >
              <div className="variation-card-glow" aria-hidden="true" />
              <div className="variation-card-accent" aria-hidden="true" />

              <div className="variation-header">
                <h3 className="variation-name">{deck.display_name}</h3>
                <ColorPips colors={deck.colors} className="variation-pips" />
              </div>

              {pickLocalized(deck.strategy, locale) && (
                <p className="variation-strategy">{pickLocalized(deck.strategy, locale)}</p>
              )}

              <PitchText text={pickLocalized(deck.pitch, locale)} />

              <div className="variation-stats">
                <div className="variation-stat">
                  <span className="stat-label">{t('variations.avgCmc')}</span>
                  <span className="stat-value">{deck.mana_audit?.avg_cmc?.toFixed(2) || '?'}</span>
                </div>
                <div className="variation-stat">
                  <span className="stat-label">{t('variations.lands')}</span>
                  <span className="stat-value">{deck.mana_audit?.land_count || '?'}</span>
                </div>
                <div className="variation-stat">
                  <span className="stat-label">{t('variations.cards')}</span>
                  <span className="stat-value">{deck.non_land_count ?? nonLands.length}</span>
                </div>
              </div>

              {keyCards.length > 0 && (
                <div className="variation-cards-showcase">
                  <h4 className="variation-cards-label">{t('variations.featuredCards')}</h4>
                  <CardCarousel
                    cards={keyCards}
                    onCardClick={onCardClick}
                  />
                </div>
              )}

              <button
                type="button"
                className="btn-variation-select"
                onClick={e => { e.stopPropagation(); handleSelect(deckName) }}
              >
                <span className="variation-btn-icon" aria-hidden="true">◈</span>
                {t('variations.viewFullDeck')}
              </button>
            </article>
          )
        })}
      </div>
    </div>
  )
}
