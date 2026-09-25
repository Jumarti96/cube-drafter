import CardImage from './CardImage'
import { ColorPips, colorToHex } from './ColorPips'
import { parseManaColors } from '../lib/cubeData.js'
import { useI18n } from '../i18n/useT.js'
import { pickLocalized } from '../i18n/localized.js'

export default function ArchetypeGrid({ archetypes, deckSummaries, onSelect, onCardClick, playerNumber = 1 }) {
  const { t, tp, locale } = useI18n()

  if (archetypes.length === 0) return null

  function handleSelect(archetype) {
    onSelect(archetype)
  }

  return (
    <div className="phase-section archetype-phase">
      <div className="archetype-phase-header">
        <span className="archetype-phase-eyebrow">{t('archetype.eyebrow')}</span>
        <h2 className="archetype-phase-title">{t('archetype.title', { n: playerNumber })}</h2>
        <p className="archetype-phase-subtitle">
          {t('archetype.subtitle', { count: archetypes.length })}
        </p>
      </div>

      <div className="archetype-grid">
        {archetypes.map((archetype, index) => {
          const deckNames = archetype.decks || []
          const firstDeck = deckNames.length > 0 ? deckSummaries[deckNames[0]] : null
          const deckCards = firstDeck?.non_land_cards || []
          const colors = parseManaColors(archetype.colors)
          const accent = colors.length ? colorToHex(colors[0]) : '#d4a843'

          // The archetype's own keystones when we have them; otherwise fall back
          // to whatever its first deck runs.
          const sampleCards = archetype.sample_cards || []
          const keyCards = sampleCards.length > 0
            ? sampleCards
            : deckCards.length <= 4
              ? deckCards
              : (() => {
                  const rares = deckCards.filter(c => c.rarity === 'rare' || c.rarity === 'mythic')
                  const others = deckCards.filter(c => c.rarity !== 'rare' && c.rarity !== 'mythic' && c.image_url)
                  const picks = []
                  for (const c of rares) { if (picks.length < 3 && c.image_url) picks.push(c) }
                  for (const c of others) { if (picks.length < 3 && c.image_url && !picks.includes(c)) picks.push(c) }
                  return picks
                })()

          return (
            <article
              key={archetype.id}
              className="archetype-card"
              style={{
                '--archetype-accent': accent,
                animationDelay: `${index * 0.08}s`,
              }}
              role="button"
              tabIndex={0}
              onClick={() => handleSelect(archetype)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleSelect(archetype)
                }
              }}
            >
              <div className="archetype-card-glow" aria-hidden="true" />
              <div className="archetype-card-accent" aria-hidden="true" />

              <div className="archetype-card-header">
                <span className="archetype-option-badge">{t('archetype.option', { n: index + 1 })}</span>
                <span className="archetype-index">#{index + 1}</span>
              </div>

              <div className="archetype-title-row">
                <h3 className="archetype-name">{archetype.name}</h3>
                <ColorPips colors={archetype.colors} className="archetype-pips" />
              </div>

              <p className="archetype-desc">{pickLocalized(archetype.description, locale)}</p>

              {pickLocalized(archetype.theme, locale) && (
                <div className="archetype-themes">
                  {pickLocalized(archetype.theme, locale).split(';').slice(0, 4).map(theme => (
                    <span key={theme.trim()} className="theme-tag">{theme.trim()}</span>
                  ))}
                </div>
              )}

              <div className="archetype-cards-showcase">
                <div className="archetype-cards-header">
                  <h4 className="archetype-subtitle">{t('archetype.keyCards')}</h4>
                  <span className="archetype-deck-meta">
                    {tp('archetype.variations', deckNames.length)}
                  </span>
                </div>
                <div className="archetype-cards">
                  {keyCards.slice(0, 3).map(card => (
                    <div
                      key={card.name}
                      className="archetype-card-slot"
                      onClick={e => { e.stopPropagation(); onCardClick(card) }}
                      onKeyDown={e => e.stopPropagation()}
                    >
                      <CardImage card={card} size="small" />
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="btn-select-archetype"
                onClick={e => { e.stopPropagation(); handleSelect(archetype) }}
              >
                <span className="archetype-btn-icon" aria-hidden="true">◈</span>
                {t('archetype.select', { name: archetype.name })}
              </button>
            </article>
          )
        })}
      </div>
    </div>
  )
}
