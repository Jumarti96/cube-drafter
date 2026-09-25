import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
  pdf,
} from '@react-pdf/renderer'
import {
  getMainboardCards,
  getSideboardCards,
  groupCardsAcrossBoards,
  isLandCard,
  resolveImageUrl,
} from './cubeData.js'

const RARITY_ORDER = { common: 0, uncommon: 1, rare: 2, mythic: 3 }
const RARITY_SECTIONS = ['common', 'uncommon', 'rare', 'mythic']

const COLOR_BUCKET_ORDER = { W: 0, U: 1, B: 2, R: 3, G: 4, C: 5, multi: 6, land: 7 }

// A4 usable width: 595 - 56 padding; cell 88 + gap 6 ≈ 6 per row
const CARDS_PER_ROW = 6

const styles = StyleSheet.create({
  page: {
    padding: 28,
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: '#1a1a1a',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 10,
    color: '#555',
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    marginTop: 12,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  gridRow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 8,
  },
  cardCell: {
    width: 88,
    padding: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 3,
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
    width: 72,
    height: 100,
    marginBottom: 4,
  },
  cardImage: {
    width: 72,
    height: 100,
    objectFit: 'contain',
  },
  countBadge: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: '#1a1a1a',
    color: '#fff',
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 3,
  },
  // Amber, so "which board" reads as a different axis from the copy count.
  sideboardBadge: {
    position: 'absolute',
    top: 2,
    left: 2,
    backgroundColor: '#b8860b',
    color: '#fff',
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 3,
  },
  cardCellSideboard: {
    borderColor: '#b8860b',
    backgroundColor: '#fdf8ec',
  },
  cardMetaSideboard: {
    color: '#8a6508',
    fontFamily: 'Helvetica-Bold',
  },
  legend: {
    fontSize: 8,
    color: '#8a6508',
    marginTop: -12,
    marginBottom: 16,
  },
  cardName: {
    fontSize: 7,
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold',
    lineHeight: 1.2,
  },
  cardMeta: {
    fontSize: 6,
    textAlign: 'center',
    color: '#666',
    marginTop: 2,
  },
  noImage: {
    width: 72,
    height: 100,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noImageText: {
    fontSize: 6,
    color: '#888',
    textAlign: 'center',
  },
})

function colorBucket(card) {
  if (isLandCard(card)) return 'land'
  const colors = card.colors || card.color_identity || []
  if (colors.length === 0) return 'C'
  if (colors.length === 1) return colors[0]
  return 'multi'
}

function resolveSmallImageUrl(card) {
  let url = resolveImageUrl(card)
  if (url) return url.replace('/normal/', '/small/')

  const sid = (card.scryfall_id || '').trim()
  if (sid) {
    return `https://cards.scryfall.io/small/front/${sid[0]}/${sid[1]}/${sid}.jpg`
  }
  return ''
}

function compareSearchCards(a, b) {
  const ra = RARITY_ORDER[(a.rarity || 'common').toLowerCase()] ?? 0
  const rb = RARITY_ORDER[(b.rarity || 'common').toLowerCase()] ?? 0
  if (ra !== rb) return ra - rb

  const ca = COLOR_BUCKET_ORDER[colorBucket(a)] ?? 99
  const cb = COLOR_BUCKET_ORDER[colorBucket(b)] ?? 99
  if (ca !== cb) return ca - cb

  const cmcA = a.cmc ?? 0
  const cmcB = b.cmc ?? 0
  if (cmcA !== cmcB) return cmcA - cmcB

  return (a.name || '').localeCompare(b.name || '')
}

export function buildSearchList(deckData) {
  // One entry per card so the deck is pulled from the cube in a single pass,
  // but keeping the per-board split so the pile can be separated afterwards.
  const grouped = groupCardsAcrossBoards({
    mainboard: getMainboardCards(deckData),
    sideboard: getSideboardCards(deckData),
  }).map(card => ({
    ...card,
    mainCount: card.counts.mainboard || 0,
    sideCount: card.counts.sideboard || 0,
    imageSmallUrl: resolveSmallImageUrl(card),
    colorBucket: colorBucket(card),
  }))

  return grouped.sort(compareSearchCards)
}

function groupByRarity(cards) {
  const groups = {}
  for (const rarity of RARITY_SECTIONS) {
    groups[rarity] = []
  }
  for (const card of cards) {
    const key = (card.rarity || 'common').toLowerCase()
    if (groups[key]) groups[key].push(card)
  }
  return groups
}

function chunkIntoRows(items, perRow) {
  const rows = []
  for (let i = 0; i < items.length; i += perRow) {
    rows.push(items.slice(i, i + perRow))
  }
  return rows
}

function colorLabelFor(bucket, t) {
  if (bucket === 'multi' || bucket === 'land') return t(`pdf.color.${bucket}`)
  return bucket || '?'
}

function CardCell({ card, t }) {
  const imageUrl = card.imageSmallUrl || ''
  const colorLabel = colorLabelFor(card.colorBucket, t)
  const count = card.count ?? 1
  const copies = count === 1
    ? t('pdf.copy_one', { count })
    : t('pdf.copy_other', { count })
  const meta = t('pdf.meta', { cmc: card.cmc ?? 0, color: colorLabel, copies })

  const main = card.mainCount ?? 0
  const side = card.sideCount ?? 0
  const sideboardOnly = side > 0 && main === 0
  const boardNote = side === 0
    ? ''
    : sideboardOnly
      ? t('pdf.boardSideboardOnly')
      : t('pdf.boardSplit', { main, side })
  const badgeText = sideboardOnly
    ? t('pdf.badgeSideboardAll')
    : t('pdf.badgeSideboardSome', { side })

  return (
    <View style={[styles.cardCell, sideboardOnly && styles.cardCellSideboard]} wrap={false}>
      <View style={styles.imageWrapper}>
        {imageUrl ? (
          <Image src={imageUrl} style={styles.cardImage} />
        ) : (
          <View style={styles.noImage}>
            <Text style={styles.noImageText}>{card.name}</Text>
          </View>
        )}
        {side > 0 && <Text style={styles.sideboardBadge}>{badgeText}</Text>}
        <Text style={styles.countBadge}>{count}x</Text>
      </View>
      <Text style={styles.cardName}>{card.name}</Text>
      <Text style={styles.cardMeta}>{meta}</Text>
      {boardNote !== '' && (
        <Text style={[styles.cardMeta, styles.cardMetaSideboard]}>{boardNote}</Text>
      )}
    </View>
  )
}

function SearchPdfDocument({ deckName, cards, t }) {
  const byRarity = groupByRarity(cards)
  const totalCopies = cards.reduce((sum, c) => sum + c.count, 0)
  const mainCopies = cards.reduce((sum, c) => sum + (c.mainCount ?? 0), 0)
  const sideCopies = cards.reduce((sum, c) => sum + (c.sideCount ?? 0), 0)

  return (
    <Document title={t('pdf.docTitle', { deck: deckName })}>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{deckName}</Text>
        <Text style={styles.subtitle}>
          {t('pdf.subtitle', { count: totalCopies, main: mainCopies, side: sideCopies })}
        </Text>
        {sideCopies > 0 && <Text style={styles.legend}>{t('pdf.legend')}</Text>}

        {RARITY_SECTIONS.map(rarity => {
          const sectionCards = byRarity[rarity]
          if (!sectionCards.length) return null
          const copies = sectionCards.reduce((sum, c) => sum + c.count, 0)
          return (
            <View key={rarity}>
              <Text style={styles.sectionHeader} minPresenceAhead={150}>
                {t(`pdf.rarity.${rarity}`)} ({copies})
              </Text>
              {chunkIntoRows(sectionCards, CARDS_PER_ROW).map((row, rowIndex) => (
                <View key={rowIndex} style={styles.gridRow} wrap={false}>
                  {row.map(card => (
                    <CardCell key={card.name} card={card} t={t} />
                  ))}
                </View>
              ))}
            </View>
          )
        })}
      </Page>
    </Document>
  )
}

export async function generateSearchPdf(deckData, deckName, t) {
  const cards = buildSearchList(deckData)
  const displayName = deckName
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())

  return pdf(<SearchPdfDocument deckName={displayName} cards={cards} t={t} />).toBlob()
}
