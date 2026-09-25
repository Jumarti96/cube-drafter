/**
 * Load every cube through the app's own code path and report what a draft would
 * see. Catches contract breakage that a file-level check cannot: archetype rows
 * the app silently drops, decks it cannot resolve, and pools that run out of
 * legal decks before the table is full.
 *
 *   node scripts/verify-cubes.mjs
 *   node scripts/verify-cubes.mjs <cube>
 */
import fs from 'fs'
import path from 'path'
import { listCubes, loadCubeData, getDeck } from '../src/lib/cubeData.js'
import { getAvailableArchetypes } from '../src/lib/deckConflicts.js'

// Scryfall rejects requests without a User-Agent, which node's fetch omits and
// browsers always send. Inject one so the basic-land lookup behaves as it does
// in the app rather than failing and looking like missing art.
const nativeFetch = globalThis.fetch
globalThis.fetch = (input, init = {}) => nativeFetch(input, {
  ...init,
  headers: { 'User-Agent': 'cube-drafter-verify/1.0', Accept: 'application/json', ...(init.headers || {}) },
})

const CUBES_DIR = process.env.CUBES_DIR || 'cubes'
const PLAYERS = Number(process.env.VERIFY_PLAYERS) || 8
const TRIALS = Number(process.env.VERIFY_TRIALS) || 300

/** Minimal stand-in for the browser's FileSystemDirectoryHandle. */
function dirHandle(dir) {
  return {
    kind: 'directory',
    name: path.basename(dir),
    async getDirectoryHandle(name) {
      const p = path.join(dir, name)
      if (!fs.existsSync(p) || !fs.statSync(p).isDirectory()) {
        throw new Error(`NotFoundError: ${p}`)
      }
      return dirHandle(p)
    },
    async getFileHandle(name) {
      const p = path.join(dir, name)
      if (!fs.existsSync(p) || !fs.statSync(p).isFile()) {
        throw new Error(`NotFoundError: ${p}`)
      }
      return { kind: 'file', name, async getFile() { return { async text() { return fs.readFileSync(p, 'utf8') } } } }
    },
    async *entries() {
      for (const name of fs.readdirSync(dir)) {
        const p = path.join(dir, name)
        yield [name, fs.statSync(p).isDirectory() ? dirHandle(p) : { kind: 'file', name }]
      }
    },
  }
}

function mulberry32(seed) {
  return () => {
    seed = (seed + 0x6D2B79F5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** How deep a draft usually gets before the legal pool runs dry. */
function simulate(archetypes, deckSummaries, rules) {
  const reached = new Map()
  for (let trial = 0; trial < TRIALS; trial++) {
    const rand = mulberry32(trial * 2654435761)
    const picks = {}
    let seated = 0
    for (let player = 0; player < PLAYERS; player++) {
      const available = getAvailableArchetypes(archetypes, picks, deckSummaries, rules)
      if (!available.length) break
      const arch = available[Math.floor(rand() * available.length)]
      const deck = arch.decks[Math.floor(rand() * arch.decks.length)]
      picks[player] = { archetypeKey: arch.key, deck }
      seated++
    }
    reached.set(seated, (reached.get(seated) || 0) + 1)
  }
  return reached
}

const only = process.argv[2]
const cubes = (await listCubes(dirHandle(CUBES_DIR))).filter(c => !only || c.slug === only)

let problems = 0
for (const cube of cubes) {
  const { archetypes, deckSummaries } = await loadCubeData(cube.handle)
  const csvRows = (await import('../src/lib/cubeData.js')).parseCSV(
    fs.readFileSync(path.join(CUBES_DIR, cube.slug, 'archetypes.csv'), 'utf8'),
  )

  const deckCount = Object.keys(deckSummaries).length
  const dropped = csvRows.length - archetypes.length
  console.log(`\n${cube.slug} — "${cube.title}"`)
  console.log(`   uncommon_copies: ${cube.uncommonCopies}`)
  console.log(`   decks loaded: ${deckCount}`)
  console.log(`   archetypes: ${archetypes.length} of ${csvRows.length} CSV rows`)

  if (!archetypes.length) {
    console.log('   ! no archetypes — the app will refuse to start a draft')
    problems++
    continue
  }
  if (dropped > 0) {
    const kept = new Set(archetypes.map(a => a.key))
    const lost = csvRows.map(r => r.archetype).filter(a => !kept.has(a))
    console.log(`   ! ${dropped} row(s) dropped (no resolvable decks): ${lost.join(', ')}`)
    problems++
  }

  // Every slug named in the CSV must exist as a loaded deck.
  const known = new Set(Object.keys(deckSummaries))
  const unresolved = new Set()
  for (const row of csvRows) {
    for (const slug of (row.decks || '').split(';').map(s => s.trim()).filter(Boolean)) {
      if (!known.has(slug)) unresolved.add(slug)
    }
  }
  if (unresolved.size) {
    console.log(`   ! ${unresolved.size} slug(s) in archetypes.csv have no deck: ${[...unresolved].slice(0, 5).join(', ')}`)
    problems++
  }

  // Decks that exist but no archetype lists them are unreachable in a draft.
  const reachable = new Set(archetypes.flatMap(a => a.decks))
  const orphaned = [...known].filter(s => !reachable.has(s))
  if (orphaned.length) {
    console.log(`   ! ${orphaned.length} deck(s) unreachable: ${orphaned.slice(0, 5).join(', ')}`)
    problems++
  }

  // One real deck load, exercising enrichment and the counting rule.
  const sample = archetypes[0].decks[0]
  const deck = await getDeck(cube.handle, sample)
  if (!deck) {
    console.log(`   ! sample deck ${sample} failed to load`)
    problems++
  } else {
    const missingImages = deck.mainboard.filter(c => !(c.image_url || '').trim()).length
    console.log(`   sample deck ${sample}: ${deck.mainboard.length} mainboard rows, `
      + `${missingImages} without an image`)
    if (missingImages) problems++
  }

  for (const rules of [{ uncommonBudget: cube.uncommonCopies }, { uncommonBudget: cube.uncommonCopies + 1 }]) {
    const reached = simulate(archetypes, deckSummaries, rules)
    const dist = [...reached.entries()].sort((a, b) => a[0] - b[0])
      .map(([n, c]) => `${n}p:${Math.round(c / TRIALS * 100)}%`).join(' ')
    const fourPlus = [...reached.entries()].filter(([n]) => n >= 4)
      .reduce((a, [, c]) => a + c, 0) / TRIALS
    console.log(`   draft depth @ ${rules.uncommonBudget} copies: >=4 players ${Math.round(fourPlus * 100)}%  (${dist})`)
  }
}

console.log(problems ? `\n${problems} problem(s) found.` : '\nAll cubes verified.')
if (problems) process.exitCode = 1
