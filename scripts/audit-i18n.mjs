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

for (const cube of cubes) {
  const en = extractCubeEn(cube)
  const rows = parseCSV(fs.readFileSync(path.join('cubes', cube, 'archetypes.csv'), 'utf8'))
  const archMissing = rows.filter(r => (r.pitch || '').trim() && !(r.pitch_es || '').trim()).length
  let deckMissing = 0
  for (const d of en.decks) {
    const dj = path.join('cubes', cube, 'decks', d.slug, 'deck.json')
    if (!fs.existsSync(dj)) continue
    const data = JSON.parse(fs.readFileSync(dj, 'utf8'))
    if ((d.pitch || data.strategy) && !(data.pitch_es || '').trim()) deckMissing++
  }
  console.log(`${cube}: arch ${rows.length} missingPitchEs=${archMissing}; decks ${en.decks.length} missingDeckPitchEs=${deckMissing}`)
}
