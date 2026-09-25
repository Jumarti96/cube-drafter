/**
 * Generate the `decks` column in each cube's archetypes.csv.
 *
 * The cube builder does not record which decks belong to which archetype, so we
 * score every (archetype, deck) pair from the signals both sides already carry.
 * Membership is deliberately permissive — a deck may sit under several
 * archetypes, which is how an uncertain match is absorbed rather than guessed.
 *
 *   node scripts/map-archetypes.mjs                 # all cubes, write
 *   node scripts/map-archetypes.mjs --check         # report only
 *   node scripts/map-archetypes.mjs <cube>          # one cube
 *   node scripts/map-archetypes.mjs --calibrate     # score against existing columns
 *   node scripts/map-archetypes.mjs <cube> --explain <deck>
 */
import fs from 'fs'
import path from 'path'
import { getMainboardCards, groupCardsByName, isLandCard, parseCSV } from '../src/lib/cubeData.js'

const CUBES_DIR = process.env.CUBES_DIR || 'cubes'

const num = (envKey, fallback) => {
  const v = Number(process.env[envKey])
  return Number.isFinite(v) ? v : fallback
}

// An archetype joins a deck when it scores at least this fraction of that deck's
// best match. Calibrated against the hand-made Dominaria Remastered and
// Innistrad mappings (recoverable from git history): these defaults land at
// ~64-68% recall and ~87-92% precision against them, with no orphaned decks and
// no empty archetypes. Loosening them mostly adds decks that share a theme with
// an archetype without belonging to it. The env vars exist for re-tuning.
const RELATIVE_FLOOR = num('MAP_RELATIVE_FLOOR', 0.60)
const ABSOLUTE_FLOOR = num('MAP_ABSOLUTE_FLOOR', 0.20)
const MAX_ARCHETYPES_PER_DECK = num('MAP_MAX_ARCHETYPES', 3)

// Share of a deck's spells that must carry a theme's tag before the theme counts
// at all, and the share at which it counts fully. Below the floor is noise: most
// decks incidentally run two or three cards tagged Lifegain without being a
// lifegain deck.
const THEME_FLOOR = num('MAP_THEME_FLOOR', 0.10)
const THEME_FULL = num('MAP_THEME_FULL', 0.35)

// A deck's best match is always kept. Every *additional* archetype must show
// specific evidence — a named keystone or core card, or heavy theme density —
// because shared colours plus a generic tag like "Tribal/Kindred" would
// otherwise file a Zombie deck under Vampires.
const SECONDARY_THEME_MIN = num('MAP_SECONDARY_THEME_MIN', 0.5)
const SECONDARY_CORE_MIN = num('MAP_SECONDARY_CORE_MIN', 0.34)

function hasSpecificEvidence(parts) {
  return parts.keystones > 0
    || parts.coreCards >= SECONDARY_CORE_MIN
    || parts.themes >= SECONDARY_THEME_MIN
}

const WEIGHTS = {
  keystones: 3.0,
  coreCards: 2.0,
  themes: 2.0,
  slug: 1.5,
  colors: 1.0,
}

const STOP_WORDS = new Set([
  'and', 'the', 'of', 'a', 'to', 'into', 'with', 'matters', 'matter',
  'deck', 'value', 'aggro', 'midrange', 'control', 'combo', 'tempo', 'grind',
  'mono', 'splash', 'turbo', 'all', 'in',
])

const norm = s => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '')
const splitList = s => String(s || '').split(/[;|]/).map(x => x.trim()).filter(Boolean)

function tokens(text) {
  return String(text || '')
    .toLowerCase()
    .split(/[^a-z0-9+]+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w))
}

function readJson(file) {
  const raw = fs.readFileSync(file, 'utf8')
  return JSON.parse(raw.charCodeAt(0) === 0xFEFF ? raw.slice(1) : raw)
}

function escapeCSV(value) {
  const s = String(value ?? '')
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

function parseHeaders(text) {
  const firstLine = text.split(/\r?\n/)[0] ?? ''
  const headers = []
  let cell = ''
  let inQuotes = false
  for (let i = 0; i < firstLine.length; i++) {
    const c = firstLine[i]
    if (inQuotes) {
      if (c === '"' && firstLine[i + 1] === '"') { cell += '"'; i++ }
      else if (c === '"') inQuotes = false
      else cell += c
    } else if (c === '"') inQuotes = true
    else if (c === ',') { headers.push(cell.trim()); cell = '' }
    else cell += c
  }
  headers.push(cell.trim())
  return headers
}

/** Everything about one deck the scorer needs. */
function loadDeck(deckDir, slug) {
  const deck = readJson(path.join(deckDir, 'deck.json'))
  const main = groupCardsByName(getMainboardCards(deck))
  const spells = main.filter(c => !isLandCard(c))
  const spellCount = spells.reduce((sum, c) => sum + c.count, 0) || 1

  // Tag mass: copies carrying each tag, so a 2-of counts twice.
  const tagMass = new Map()
  for (const card of spells) {
    const tags = new Set([
      ...(card.tags || []),
      ...(card.taxonomic_profile?.synergy_clusters || []),
    ])
    for (const tag of tags) {
      const key = norm(tag)
      if (key) tagMass.set(key, (tagMass.get(key) || 0) + card.count)
    }
  }

  return {
    slug,
    names: new Set(main.map(c => c.name)),
    tagMass,
    spellCount,
    colors: new Set((deck.colors || '').toUpperCase().match(/[WUBRG]/g) || []),
    slugTokens: new Set([...tokens(slug.replace(/-/g, ' ')), ...tokens(deck.strategy)]),
  }
}

function scorePair(arch, deck) {
  const parts = {}

  const hits = list => list.filter(n => deck.names.has(n)).length
  parts.keystones = arch.keystones.length ? hits(arch.keystones) / arch.keystones.length : 0
  parts.coreCards = arch.coreCards.length
    ? Math.min(1, hits(arch.coreCards) / Math.min(arch.coreCards.length, 6))
    : 0

  // Theme density: share of the deck's spells carrying each of the archetype's
  // themes as a card tag, ramped from THEME_FLOOR to THEME_FULL and averaged.
  if (arch.themes.length) {
    let sum = 0
    for (const theme of arch.themes) {
      const density = (deck.tagMass.get(theme) || 0) / deck.spellCount
      const scaled = (density - THEME_FLOOR) / (THEME_FULL - THEME_FLOOR)
      sum += Math.max(0, Math.min(1, scaled))
    }
    parts.themes = sum / arch.themes.length
  } else {
    parts.themes = 0
  }

  const shared = [...arch.nameTokens].filter(tk => deck.slugTokens.has(tk)).length
  parts.slug = arch.nameTokens.size ? Math.min(1, shared / Math.min(arch.nameTokens.size, 3)) : 0

  // Colour fit only matters when the archetype names colours at all.
  if (arch.colors.size && deck.colors.size) {
    const inside = [...deck.colors].filter(c => arch.colors.has(c)).length
    parts.colors = inside / deck.colors.size
  } else {
    parts.colors = 0.5
  }

  let total = 0
  let maxTotal = 0
  for (const [key, weight] of Object.entries(WEIGHTS)) {
    total += parts[key] * weight
    maxTotal += weight
  }
  return { score: total / maxTotal, parts }
}

function mapCube(slug) {
  const dir = path.join(CUBES_DIR, slug)
  const csvPath = path.join(dir, 'archetypes.csv')
  const decksDir = path.join(dir, 'decks')
  if (!fs.existsSync(csvPath) || !fs.existsSync(decksDir)) return null

  const csvText = fs.readFileSync(csvPath, 'utf8')
  const headers = parseHeaders(csvText)
  const rows = parseCSV(csvText)

  const archetypes = rows.map(row => ({
    row,
    name: row.archetype || '',
    keystones: splitList(row.keystones),
    coreCards: splitList(row.core_cards),
    themes: splitList(row.key_themes).map(norm).filter(Boolean),
    nameTokens: new Set([...tokens(row.archetype), ...tokens(row.macro_archetype)]),
    colors: new Set((row.colors || '').toUpperCase().match(/[WUBRG]/g) || []),
  }))

  const deckSlugs = fs.readdirSync(decksDir).filter(n => {
    if (n.startsWith('.') || n.startsWith('ignore')) return false
    return fs.existsSync(path.join(decksDir, n, 'deck.json'))
  })
  const decks = deckSlugs.map(s => loadDeck(path.join(decksDir, s), s))

  const assignment = new Map(archetypes.map(a => [a.name, []]))
  const perDeck = []

  for (const deck of decks) {
    const scored = archetypes
      .map(arch => ({ arch, ...scorePair(arch, deck) }))
      .sort((a, b) => b.score - a.score)

    const best = scored[0]
    // Never orphan a deck: the top match counts whatever it scored.
    const chosen = best ? [best] : []
    const cutoff = Math.max(ABSOLUTE_FLOOR, best ? best.score * RELATIVE_FLOOR : 0)

    for (const s of scored.slice(1)) {
      if (chosen.length >= MAX_ARCHETYPES_PER_DECK) break
      if (s.score < cutoff) break
      if (!hasSpecificEvidence(s.parts)) continue
      chosen.push(s)
    }

    for (const s of chosen) assignment.get(s.arch.name).push(deck.slug)
    perDeck.push({ slug: deck.slug, chosen: chosen.map(s => ({ name: s.arch.name, score: s.score })) })
  }

  return { dir, csvPath, headers, rows, archetypes, decks, assignment, perDeck }
}

function writeCsv(result) {
  const headers = [...result.headers]
  if (!headers.includes('decks')) {
    // Keep `decks` next to the prose columns the app also reads.
    const at = headers.indexOf('pitch')
    if (at >= 0) headers.splice(at + 1, 0, 'decks')
    else headers.push('decks')
  }
  const lines = [headers.map(escapeCSV).join(',')]
  for (const row of result.rows) {
    const decks = result.assignment.get(row.archetype || '') || []
    const out = { ...row, decks: [...decks].sort().join(';') }
    lines.push(headers.map(h => escapeCSV(out[h] ?? '')).join(','))
  }
  fs.writeFileSync(result.csvPath, `${lines.join('\n')}\n`, 'utf8')
}

function report(slug, result) {
  const counts = [...result.assignment.entries()].map(([name, list]) => [name, list.length])
  const empty = counts.filter(([, n]) => n === 0)
  const perDeckCounts = result.perDeck.map(d => d.chosen.length)
  const orphans = result.perDeck.filter(d => d.chosen.length === 0)
  const avg = perDeckCounts.reduce((a, b) => a + b, 0) / (perDeckCounts.length || 1)

  console.log(`\n${slug} — ${result.decks.length} decks, ${result.archetypes.length} archetypes`)
  console.log(`   archetypes per deck: avg ${avg.toFixed(2)}, max ${Math.max(...perDeckCounts, 0)}`)
  console.log(`   orphan decks: ${orphans.length}`)
  for (const [name, n] of counts.sort((a, b) => b[1] - a[1])) {
    console.log(`      ${String(n).padStart(3)}  ${name}`)
  }
  if (empty.length) {
    console.log(`   ! ${empty.length} archetype(s) with no decks — the app drops these rows:`)
    for (const [name] of empty) {
      const arch = result.archetypes.find(a => a.name === name)
      const best = result.decks
        .map(d => ({ slug: d.slug, ...scorePair(arch, d) }))
        .sort((a, b) => b.score - a.score)[0]
      console.log(`      ${name} — best candidate ${best?.slug} (${best?.score.toFixed(3)})`)
    }
  }
  return { empty: empty.length, orphans: orphans.length }
}

/** Compare generated membership against a hand-made `decks` column. */
function calibrate(slug, result) {
  let tp = 0
  let hand = 0
  let auto = 0
  for (const row of result.rows) {
    const expected = new Set(splitList(row.decks))
    if (!expected.size) continue
    const got = new Set(result.assignment.get(row.archetype) || [])
    hand += expected.size
    auto += got.size
    for (const s of expected) if (got.has(s)) tp++
  }
  if (!hand) {
    console.log(`\n${slug}: no existing decks column to calibrate against`)
    return
  }
  console.log(`\n${slug}: hand=${hand} auto=${auto} overlap=${tp} `
    + `recall=${(tp / hand * 100).toFixed(0)}% precision=${(tp / auto * 100).toFixed(0)}%`)
}

/** Why a single deck landed where it did: every archetype, best first. */
function explain(result, deckSlug) {
  const deck = result.decks.find(d => d.slug === deckSlug)
  if (!deck) return false
  const scored = result.archetypes
    .map(arch => ({ arch, ...scorePair(arch, deck) }))
    .sort((a, b) => b.score - a.score)
  const cutoff = Math.max(ABSOLUTE_FLOOR, scored[0].score * RELATIVE_FLOOR)
  const chosen = new Set((result.perDeck.find(d => d.slug === deckSlug)?.chosen || []).map(c => c.name))

  console.log(`
${deckSlug}  (cutoff ${cutoff.toFixed(3)})`)
  console.log('   in?  score  keys  core  theme  slug  color  archetype')
  for (const s of scored) {
    const p = s.parts
    console.log(
      `   ${chosen.has(s.arch.name) ? ' * ' : '   '}  ${s.score.toFixed(3)}`
      + `  ${p.keystones.toFixed(2)}  ${p.coreCards.toFixed(2)}`
      + `   ${p.themes.toFixed(2)}  ${p.slug.toFixed(2)}   ${p.colors.toFixed(2)}  ${s.arch.name}`,
    )
  }
  return true
}

const args = process.argv.slice(2)
const explainIdx = args.indexOf('--explain')
const explainSlug = explainIdx >= 0 ? args[explainIdx + 1] : null
const isCalibrate = args.includes('--calibrate')
const write = !args.includes('--check') && !isCalibrate && !explainSlug
const only = args.find((a, i) => !a.startsWith('--') && !(explainIdx >= 0 && i === explainIdx + 1))

const slugs = fs.readdirSync(CUBES_DIR).filter(n => {
  const p = path.join(CUBES_DIR, n)
  return fs.statSync(p).isDirectory() && !n.startsWith('.') && (!only || n === only)
})

let issues = 0
for (const slug of slugs) {
  const result = mapCube(slug)
  if (!result) continue
  if (explainSlug) {
    explain(result, explainSlug)
    continue
  }
  if (isCalibrate) {
    calibrate(slug, result)
    continue
  }
  const r = report(slug, result)
  issues += r.empty + r.orphans
  if (write) writeCsv(result)
}

if (!isCalibrate && !explainSlug) {
  console.log(write ? '\nDone (archetypes.csv written).' : '\nDone (check only, nothing written).')
  if (issues) console.log(`${issues} archetype(s)/deck(s) need attention.`)
}
