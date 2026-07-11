import CardImage from './CardImage'
import { useT } from '../i18n/useT.js'

const SECONDS_PER_CARD = 4

export default function CardCarousel({ cards, onCardClick, className = '' }) {
  const t = useT()
  if (!cards?.length) return null

  const enableMarquee = cards.length >= 2
  const loopCards = enableMarquee ? [...cards, ...cards] : cards
  const duration = Math.max(cards.length * SECONDS_PER_CARD, 14)

  return (
    <div
      className={`card-carousel ${enableMarquee ? 'card-carousel-marquee' : ''} ${className}`.trim()}
      onClick={e => e.stopPropagation()}
      onKeyDown={e => e.stopPropagation()}
    >
      <div className="card-carousel-viewport">
        <div
          className="card-carousel-marquee-track"
          style={enableMarquee ? {
            '--marquee-duration': `${duration}s`,
            animation: `card-marquee ${duration}s linear infinite`,
          } : undefined}
        >
          {loopCards.map((card, index) => (
            <button
              key={`${card.name}-${index}`}
              type="button"
              className="card-carousel-item"
              onClick={() => onCardClick?.(card)}
              aria-label={t('card.view', { name: card.name })}
            >
              <CardImage card={card} size="small" />
            </button>
          ))}
        </div>
      </div>

      {enableMarquee && (
        <>
          <div className="card-carousel-fade card-carousel-fade-left visible" aria-hidden="true" />
          <div className="card-carousel-fade card-carousel-fade-right visible" aria-hidden="true" />
        </>
      )}
    </div>
  )
}
