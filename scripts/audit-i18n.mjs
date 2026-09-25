import fs from 'fs'
import path from 'path'
import { extractCubeEn } from './translate-cube-copy.mjs'

const cubes = fs.readdirSync('cubes').filter(n => {
  const p = path.join('cubes', n)
  return fs.statSync(p).isDirectory()
    && !n.startsWith('.')
    && fs.existsSync(path.join(p, 'archetypes.csv'))
})

function parseCSV(text) {
  const rows = []
  let row = []
  let cell = ''
  let inQuotes = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    const n = text[i + 1]
    if (inQuotes) {
      if (c === '"' && n === '"') { cell += '"'; i++ }
      else if (c === '"') inQuotes = false
      else cell += c
    } else if (c === '"') inQuotes = true
    else if (c === ',') { row.push(cell); cell = '' }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && n === '\n') i++
      row.push(cell); rows.push(row); row = []; cell = ''
    } else cell += c
  }
  if (cell.length || row.length) { row.push(cell); rows.push(row) }
  const headers = rows[0].map(h => h.trim())
  return rows.slice(1).filter(r => r.some(x => String(x).trim())).map(r => {
    const o = {}
    headers.forEach((h, i) => { o[h] = (r[i] || '').trim() })
    return o
  })
}

// A field counts as missing only when there is English copy to translate. Decks
// whose analysis has no pitch paragraph have nothing to translate and must not
// be reported as gaps, or real gaps get lost in the noise.
const missing = (en, es) => Boolean((en || '').trim()) && !((es || '').trim())

let total = 0
for (const cube of cubes) {
  const en = extractCubeEn(cube)
  const rows = parseCSV(fs.readFileSync(path.join('cubes', cube, 'archetypes.csv'), 'utf8'))

  const arch = {
    pitch: rows.filter(r => missing(r.pitch, r.pitch_es)).length,
    rationale: rows.filter(r => missing(r.rationale, r.rationale_es)).length,
    themes: rows.filter(r => missing(r.key_themes, r.key_themes_es)).length,
  }

  const deck = { strategy: 0, identity: 0, pitch: 0 }
  for (const d of en.decks) {
    const dj = path.join('cubes', cube, 'decks', d.slug, 'deck.json')
    if (!fs.existsSync(dj)) continue
    const data = JSON.parse(fs.readFileSync(dj, 'utf8'))
    if (missing(data.strategy, data.strategy_es)) deck.strategy++
    if (missing(data.identity, data.identity_es)) deck.identity++
    if (missing(data.pitch, data.pitch_es)) deck.pitch++
  }

  const gaps = arch.pitch + arch.rationale + arch.themes + deck.strategy + deck.identity + deck.pitch
  total += gaps
  console.log(
    `${cube}: ${gaps ? 'GAPS' : 'complete'}\n`
    + `   archetypes ${rows.length}: pitch ${arch.pitch}, rationale ${arch.rationale}, themes ${arch.themes} untranslated\n`
    + `   decks ${en.decks.length}: strategy ${deck.strategy}, identity ${deck.identity}, pitch ${deck.pitch} untranslated`,
  )
}

console.log(total ? `\n${total} field(s) still need Spanish.` : '\nAll Spanish copy is in place.')
if (total) process.exitCode = 1
