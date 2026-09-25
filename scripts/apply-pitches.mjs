/**
 * Write the authored archetype pitches into each cube's archetypes.csv.
 *
 * The pitch is the player-facing copy on an archetype card; `rationale` stays
 * untouched as the designer-facing record. Copy lives in scripts/pitches/<cube>.json
 * so it stays reviewable and out of hand-edited CSV.
 *
 *   node scripts/apply-pitches.mjs           # validate + write
 *   node scripts/apply-pitches.mjs --check   # validate only
 *   node scripts/apply-pitches.mjs <cube>    # one cube
 */
import fs from 'fs'
import path from 'path'
import { parseCSV } from '../src/lib/cubeData.js'

const CUBES_DIR = 'cubes'
const PITCH_DIR = 'scripts/pitches'

// Cards have no line clamp in the UI, so a long pitch stretches its card taller
// than its neighbours in the archetype grid.
const MIN_LEN = 180
const MAX_LEN = 420

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

/** Card names, including each face of a double-faced card. */
function cardNames(cube) {
  const p = path.join(CUBES_DIR, cube, 'enriched.json')
  const names = new Set()
  if (!fs.existsSync(p)) return names
  for (const card of readJson(p).cards || []) {
    if (!card.name) continue
    names.add(card.name)
    for (const face of card.name.split('//')) {
      const f = face.trim()
      if (f) names.add(f)
    }
  }
  return names
}

function namedCards(row) {
  const out = new Set()
  for (const field of ['keystones', 'core_cards']) {
    for (const raw of (row[field] || '').split(';')) {
      const name = raw.trim()
      if (!name) continue
      out.add(name)
      for (const face of name.split('//')) {
        const f = face.trim()
        if (f) out.add(f)
      }
    }
  }
  return out
}

const cubes = fs.readdirSync(CUBES_DIR).filter(n => {
  const p = path.join(CUBES_DIR, n)
  return fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, 'archetypes.csv'))
})

// Every card in the project, so a pitch borrowing a card from another cube is caught.
const namesByCube = new Map(cubes.map(c => [c, cardNames(c)]))
const allNames = new Set([...namesByCube.values()].flatMap(s => [...s]))

const args = process.argv.slice(2)
const write = !args.includes('--check')
const only = args.find(a => !a.startsWith('--'))

let problems = 0
for (const cube of cubes) {
  if (only && cube !== only) continue

  const pitchPath = path.join(PITCH_DIR, `${cube}.json`)
  if (!fs.existsSync(pitchPath)) {
    console.log(`\n${cube}\n   ! no ${pitchPath}`)
    problems++
    continue
  }

  const pitches = readJson(pitchPath)
  const csvPath = path.join(CUBES_DIR, cube, 'archetypes.csv')
  const csvText = fs.readFileSync(csvPath, 'utf8')
  const rows = parseCSV(csvText)
  const ownNames = namesByCube.get(cube)
  const issues = []

  for (const row of rows) {
    const name = row.archetype || ''
    const pitch = (pitches[name] || '').trim()
    if (!pitch) {
      issues.push(`${name}: no pitch`)
      continue
    }
    if (pitch.length < MIN_LEN || pitch.length > MAX_LEN) {
      issues.push(`${name}: ${pitch.length} chars, expected ${MIN_LEN}-${MAX_LEN}`)
    }

    // Concreteness: the pitch has to name at least one of the archetype's cards.
    const named = [...namedCards(row)]
    if (named.length && !named.some(n => pitch.includes(n))) {
      issues.push(`${name}: names none of its keystones or core cards`)
    }

    // A card that exists elsewhere in the project but not in this cube means the
    // copy has drifted to the wrong set.
    for (const other of allNames) {
      if (other.length > 6 && pitch.includes(other) && !ownNames.has(other)) {
        issues.push(`${name}: mentions "${other}", which is not in this cube`)
        break
      }
    }
  }

  const known = new Set(rows.map(r => r.archetype))
  for (const key of Object.keys(pitches)) {
    if (!known.has(key)) issues.push(`pitch for "${key}" matches no archetype`)
  }

  console.log(`\n${cube} — ${rows.length} archetypes${issues.length ? '' : ' — ok'}`)
  for (const i of issues) console.log(`   ! ${i}`)
  problems += issues.length
  if (issues.length || !write) continue

  const headers = [...parseHeaders(csvText)]
  if (!headers.includes('pitch')) {
    const at = headers.indexOf('decks')
    if (at >= 0) headers.splice(at, 0, 'pitch')
    else headers.push('pitch')
  }
  const lines = [headers.map(escapeCSV).join(',')]
  for (const row of rows) {
    const out = { ...row, pitch: (pitches[row.archetype] || '').trim() }
    lines.push(headers.map(h => escapeCSV(out[h] ?? '')).join(','))
  }
  fs.writeFileSync(csvPath, `${lines.join('\n')}\n`, 'utf8')
  console.log('   + pitch column written')
}

if (problems) {
  console.log(`\n${problems} problem(s); nothing written for affected cubes.`)
} else {
  console.log(write ? '\nAll pitches applied.' : '\nAll pitches valid (check only, nothing written).')
}
if (problems) process.exitCode = 1
