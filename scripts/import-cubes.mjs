/**
 * Prepare copied cube folders for the drafter.
 *
 * Idempotent: run it after every copy from the cube builder.
 *   node scripts/import-cubes.mjs            # validate + write
 *   node scripts/import-cubes.mjs --check    # validate only
 *   node scripts/import-cubes.mjs <cube>     # one cube
 */
import fs from 'fs'
import path from 'path'
import {
  countCards,
  extractPitchFromAnalysis,
  getMainboardCards,
  isLandCard,
} from '../src/lib/cubeData.js'

const CUBES_DIR = 'cubes'
const EXPECTED_DECK_SIZE = 40
const BASIC_LANDS = new Set(['Plains', 'Island', 'Swamp', 'Mountain', 'Forest', 'Wastes'])

/** Physical copies of each card the cube owner holds, by cube slug pattern. */
const UNCOMMON_COPIES = [
  { pattern: /^ecl$/, copies: 3 },
  { pattern: /^eoe$/, copies: 3 },
  { pattern: /^innistrad-remastered/, copies: 3 },
]
const DEFAULT_COPIES = 2

function uncommonCopiesFor(slug) {
  return UNCOMMON_COPIES.find(r => r.pattern.test(slug))?.copies ?? DEFAULT_COPIES
}

function readJson(file) {
  const raw = fs.readFileSync(file, 'utf8')
  return JSON.parse(raw.charCodeAt(0) === 0xFEFF ? raw.slice(1) : raw)
}

/** Always UTF-8, no BOM — the old Innistrad data was double-encoded. */
function writeJson(file, data) {
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
}

function isBasic(name) {
  return BASIC_LANDS.has(name) || name.startsWith('Snow-Covered ')
}

function listCubeSlugs(only) {
  const all = fs.readdirSync(CUBES_DIR).filter(n => {
    const p = path.join(CUBES_DIR, n)
    return fs.statSync(p).isDirectory() && !n.startsWith('.') && !n.startsWith('ignore')
  })
  return only ? all.filter(n => n === only) : all
}

function processCube(slug, { write }) {
  const dir = path.join(CUBES_DIR, slug)
  const problems = []
  const notes = []

  for (const required of ['mainboard.csv', 'meta.json', 'enriched.json', 'archetypes.csv']) {
    if (!fs.existsSync(path.join(dir, required))) {
      problems.push(`missing ${required}`)
    }
  }
  // Without mainboard.csv the app will not even list the cube.
  if (!fs.existsSync(path.join(dir, 'mainboard.csv'))) {
    return { slug, decks: 0, problems, notes, skipped: true }
  }

  // --- meta.json: uncommon_copies -------------------------------------------
  const metaPath = path.join(dir, 'meta.json')
  if (fs.existsSync(metaPath)) {
    const meta = readJson(metaPath)
    const want = uncommonCopiesFor(slug)
    if (meta.uncommon_copies !== want) {
      notes.push(`uncommon_copies ${meta.uncommon_copies ?? '(unset)'} -> ${want}`)
      if (write) writeJson(metaPath, { ...meta, uncommon_copies: want })
    }
    if (!meta.title) problems.push('meta.json has no title')
  }

  // --- enriched.json --------------------------------------------------------
  const enrichedPath = path.join(dir, 'enriched.json')
  const enrichedNames = new Set()
  if (fs.existsSync(enrichedPath)) {
    for (const card of readJson(enrichedPath).cards || []) {
      if (card.name) enrichedNames.add(card.name)
    }
    if (!enrichedNames.size) problems.push('enriched.json has no cards')
  }

  // --- decks ----------------------------------------------------------------
  const decksDir = path.join(dir, 'decks')
  if (!fs.existsSync(decksDir)) {
    problems.push('no decks/ directory')
    return { slug, decks: 0, problems, notes }
  }

  const slugs = fs.readdirSync(decksDir).filter(n => {
    if (n.startsWith('.') || n.startsWith('ignore')) return false
    return fs.statSync(path.join(decksDir, n)).isDirectory()
  })

  if (!slugs.length) problems.push('decks/ is empty')

  const missingCards = new Set()
  let pitchWrites = 0
  let noPitch = 0

  for (const deckSlug of slugs) {
    const deckDir = path.join(decksDir, deckSlug)
    const deckPath = path.join(deckDir, 'deck.json')
    if (!fs.existsSync(deckPath)) {
      problems.push(`${deckSlug}: no deck.json`)
      continue
    }
    for (const companion of ['deck.tsv', 'deck.mwDeck']) {
      if (!fs.existsSync(path.join(deckDir, companion))) {
        problems.push(`${deckSlug}: no ${companion}`)
      }
    }

    const deck = readJson(deckPath)
    const size = countCards(getMainboardCards(deck))
    if (size !== EXPECTED_DECK_SIZE) {
      problems.push(`${deckSlug}: mainboard is ${size} cards, expected ${EXPECTED_DECK_SIZE}`)
    }

    for (const card of [...(deck.mainboard || []), ...(deck.sideboard || [])]) {
      const name = card.name || ''
      if (name && !isBasic(name) && !isLandCard(card) && !enrichedNames.has(name)) {
        missingCards.add(name)
      }
    }

    // Inline the pitch so cube loads do not read analysis.md for every deck.
    const analysisPath = path.join(deckDir, 'analysis.md')
    if (!fs.existsSync(analysisPath)) {
      problems.push(`${deckSlug}: no analysis.md`)
      continue
    }
    const pitch = extractPitchFromAnalysis(fs.readFileSync(analysisPath, 'utf8'))
    if (!pitch) noPitch += 1
    if ((deck.pitch || '') !== pitch) {
      pitchWrites += 1
      if (write) writeJson(deckPath, { ...deck, pitch })
    }
  }

  if (pitchWrites) notes.push(`pitch written for ${pitchWrites} deck(s)`)
  if (noPitch) notes.push(`${noPitch} deck(s) have no "## ANALYSIS" paragraph (UI falls back to strategy)`)
  if (missingCards.size) {
    problems.push(`${missingCards.size} card name(s) absent from enriched.json: ${[...missingCards].slice(0, 5).join(', ')}`)
  }

  return { slug, decks: slugs.length, problems, notes }
}

const args = process.argv.slice(2)
const write = !args.includes('--check')
const only = args.find(a => !a.startsWith('--'))

let failed = 0
for (const slug of listCubeSlugs(only)) {
  const r = processCube(slug, { write })
  const status = r.problems.length ? 'PROBLEMS' : 'ok'
  console.log(`\n${r.slug} — ${r.decks} decks — ${status}${r.skipped ? ' (not a cube, skipped)' : ''}`)
  for (const n of r.notes) console.log(`   ${write ? '+' : '~'} ${n}`)
  for (const p of r.problems) console.log(`   ! ${p}`)
  if (r.problems.length) failed += 1
}

console.log(write ? '\nDone (files written).' : '\nDone (check only, nothing written).')
if (failed) {
  console.log(`${failed} cube(s) reported problems.`)
  process.exitCode = 1
}
