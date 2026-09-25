import { useState } from 'react'
import CardImage from './CardImage'
import { ColorPips } from './ColorPips'
import { ManaCost } from './ManaSymbols.jsx'
import {
  getCardImageLookup,
  getColorCardCounts,
  getMainboardCards,
  getNonLandMainboardCount,
  getSideboardCards,
  groupCardsByName,
  isLandCard,
} from '../lib/cubeData.js'
import { getDeckExportOptions, localizeExportOption, runDeckExport } from '../lib/deckExport.js'
import { useI18n } from '../i18n/useT.js'
import { pickLocalized } from '../i18n/localized.js'

function resolveImageUrl(card) {
  let url = card.image_url || ''
  if (url && url.trim()) return url.trim()

  const scryfallId = card.scryfall_id || ''
  if (scryfallId && scryfallId.trim()) {
    const first = scryfallId[0]
    const second = scryfallId[1]
    return `https://cards.scryfall.io/normal/front/${first}/${second}/${scryfallId}.jpg`
  }

  const name = card.name || ''
  const cardImageLookup = getCardImageLookup()
  if (name && cardImageLookup) {
    const entry = cardImageLookup[name]
    if (entry) {
      if (entry.image_url && entry.image_url.trim()) return entry.image_url.trim()
      if (entry.scryfall_id && entry.scryfall_id.trim()) {
        const sid = entry.scryfall_id
        return `https://cards.scryfall.io/normal/front/${sid[0]}/${sid[1]}/${sid}.jpg`
      }
    }
  }

  const backUrl = card.image_back_url || ''
  if (backUrl && backUrl.trim()) return backUrl.trim()

  return ''
}

function enrichCards(cards) {
  return cards.map(c => ({
    ...c,
    image_url: resolveImageUrl(c),
    oracle_text: c.oracle_text || '',
  }))
}

const COLOR_ORDER = ['W', 'U', 'B', 'R', 'G', 'C']

function getDeckCardCategory(card) {
  if (isLandCard(card)) return 'lands'
  const tl = card.type_line || ''
  if (tl.includes('Creature')) return 'creatures'
  if (tl.includes('Instant') || tl.includes('Sorcery')) return 'instants-sorceries'
  return 'other-spells'
}

function hasPowerToughness(card) {
  return card?.power != null && card.power !== ''
    && card?.toughness != null && card.toughness !== ''
}

export default function DeckViewer({ deckData, deckName, onCardClick, onConfirm, playerNumber }) {
  const { t, tp, locale } = useI18n()
  const [pdfLoading, setPdfLoading] = useState(false)

  if (!deckData) return null

  const sideboardCards = getSideboardCards(deckData)
  const mainDeck = getMainboardCards(deckData)

  const creatures = mainDeck.filter(c => getDeckCardCategory(c) === 'creatures')
  const instantsSorceries = mainDeck.filter(c => getDeckCardCategory(c) === 'instants-sorceries')
  const otherSpells = mainDeck.filter(c => getDeckCardCategory(c) === 'other-spells')
  const lands = mainDeck.filter(c => getDeckCardCategory(c) === 'lands')

  const creaturesGrouped = enrichCards(groupCardsByName(creatures)).sort((a, b) => (a.cmc ?? 0) - (b.cmc ?? 0))
  const instantsSorceriesGrouped = enrichCards(groupCardsByName(instantsSorceries)).sort((a, b) => (a.cmc ?? 0) - (b.cmc ?? 0))
  const otherSpellsGrouped = enrichCards(groupCardsByName(otherSpells)).sort((a, b) => (a.cmc ?? 0) - (b.cmc ?? 0))
  const landsGrouped = enrichCards(groupCardsByName(lands))
  const sideboardGrouped = enrichCards(groupCardsByName(sideboardCards)).sort((a, b) => (a.cmc ?? 0) - (b.cmc ?? 0))

  const colorCardCounts = getColorCardCounts(deckData)
  const nonLandCount = getNonLandMainboardCount(deckData)

  const categories = [
    { key: 'creatures', label: t('deck.creatures'), cards: creaturesGrouped },
    { key: 'instants-sorceries', label: t('deck.instantsSorceries'), cards: instantsSorceriesGrouped },
    { key: 'other-spells', label: t('deck.otherSpells'), cards: otherSpellsGrouped },
    { key: 'lands', label: t('deck.lands'), cards: landsGrouped },
    { key: 'sideboard', label: t('deck.sideboard'), cards: sideboardGrouped },
  ].filter(cat => cat.cards.length > 0)

  return (
    <div className="phase-section">
      <div className="phase-header">
        <h2 className="phase-title">{deckName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h2>
        <div className="deck-meta-row">
          <ColorPips colors={deckData.colors} />
          <span className="deck-format">{deckData.format || t('deck.formatFallback')}</span>
          <span className="deck-cmc">{t('deck.avgCmc', { cmc: (deckData.mana_audit?.avg_cmc || 0).toFixed(2) })}</span>
          <span className="deck-land-count">{t('deck.landsCount', { count: deckData.mana_audit?.land_count || '?' })}</span>
        </div>
        {pickLocalized({ en: deckData.identity, es: deckData.identity_es }, locale) && (
          <p className="deck-identity">
            {pickLocalized({ en: deckData.identity, es: deckData.identity_es }, locale)}
          </p>
        )}
      </div>

      <div className="mana-symbols-bar">
        <h4 className="section-label">{t('deck.cardsByColor', { count: nonLandCount })}</h4>
        <div className="mana-symbols">
          {COLOR_ORDER.map(color => {
            const count = colorCardCounts[color]
            if (count === 0) return null
            return (
              <span key={color} className="mana-symbol-chip">
                {color === 'C' ? (
                  <span className="pip pip-c">●</span>
                ) : (
                  <ColorPips colors={[color]} />
                )}
                <span className="mana-sym">{t(`deck.color.${color}`)}</span>
                <span className="mana-sym-count">{tp('deck.cardCount', count)}</span>
              </span>
            )
          })}
        </div>
      </div>

      <div className="deck-cards-list">
        {categories.map(cat => (
          <section key={cat.key} className="deck-category-section">
            <h3 className="deck-category-header">
              <span className="deck-category-title">{cat.label}</span>
              <span className="deck-category-count">
                {t('deck.cardsCount', { count: cat.cards.reduce((sum, c) => sum + c.count, 0) })}
              </span>
            </h3>
            <CardList cards={cat.cards} onCardClick={onCardClick} />
          </section>
        ))}
      </div>

      <div className="deck-files-section">
        <h4 className="section-label">{t('deck.files')}</h4>
        <div className="deck-files-grid">
          {getDeckExportOptions(deckData).map(rawOption => {
            const option = localizeExportOption(rawOption, t)
            const isBusy = pdfLoading && option.id === 'pdf-search'
            return (
              <button
                key={option.id}
                className="deck-file-link"
                disabled={pdfLoading}
                onClick={async () => {
                  if (option.id === 'pdf-search') setPdfLoading(true)
                  try {
                    await runDeckExport(option.id, deckData, deckName, t)
                  } catch (err) {
                    console.error(err)
                    alert(t('deck.exportFailed'))
                  } finally {
                    if (option.id === 'pdf-search') setPdfLoading(false)
                  }
                }}
              >
                <span className="file-icon">{option.actionType === 'download' ? '↓' : option.actionType === 'copy' ? '⎘' : '◈'}</span>
                <span className="file-name">{isBusy ? t('deck.generating') : option.name}</span>
                <span className="file-desc">{option.desc}</span>
              </button>
            )
          })}
        </div>
      </div>

      {onConfirm && (
        <div className="deck-confirm-section">
          <button className="btn-confirm-deck" onClick={onConfirm}>
            {playerNumber
              ? t('deck.confirmPlayer', { n: playerNumber })
              : t('deck.confirm')}
          </button>
        </div>
      )}
    </div>
  )
}

function CardList({ cards, onCardClick }) {
  if (!cards || cards.length === 0) return null

  return (
    <div className="card-list-grid">
      {cards.map((card, i) => (
        <div key={`${card.name}-${i}`} className="deck-card-row" onClick={() => onCardClick(card)}>
          <div className="deck-card-image-col">
            <CardImage card={card} size="small" />
          </div>
          <div className="deck-card-info">
            <div className="deck-card-name">
              {card.count > 1 && <span className="card-count-badge">{card.count}x</span>}
              {card.name}
            </div>
            <div className="deck-card-type">{card.type_line}</div>
            {card.mana_cost && (
              <div className="deck-card-mana">
                <ManaCost cost={card.mana_cost} size="sm" />
              </div>
            )}
          </div>
          <div className="deck-card-meta">
            {hasPowerToughness(card) && (
              <div className="deck-card-pt">{card.power}/{card.toughness}</div>
            )}
            <div className="deck-card-cmc">CMC {card.cmc}</div>
            <span className={`rarity-dot rarity-${(card.rarity || 'common').toLowerCase()}`} />
          </div>
        </div>
      ))}
    </div>
  )
}
