import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

function parseCSV(text) {
  const rows = []
  let row = []
  let cell = ''
  let inQuotes = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    const n = text[i + 1]
    if (inQuotes) {
      if (c === '"' && n === '"') {
        cell += '"'
        i++
      } else if (c === '"') {
        inQuotes = false
      } else {
        cell += c
      }
    } else if (c === '"') {
      inQuotes = true
    } else if (c === ',') {
      row.push(cell)
      cell = ''
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && n === '\n') i++
      row.push(cell)
      rows.push(row)
      row = []
      cell = ''
    } else {
      cell += c
    }
  }
  if (cell.length || row.length) {
    row.push(cell)
    rows.push(row)
  }
  if (!rows.length) return []
  const headers = rows[0].map(h => h.trim())
  return rows.slice(1).filter(r => r.some(x => String(x).trim())).map(r => {
    const o = {}
    headers.forEach((h, i) => {
      o[h] = (r[i] || '').trim()
    })
    return o
  })
}

function extractPitch(text) {
  if (!text) return ''
  let body = text
  if (text.startsWith('---')) {
    const end = text.indexOf('---', 3)
    if (end !== -1) body = text.slice(end + 3)
  }
  const m = body.match(/^##\s+ANALYSIS\s*$/m)
  if (!m) return ''
  let section = body.slice(m.index + m[0].length)
  const nh = section.search(/^##\s/m)
  if (nh !== -1) section = section.slice(0, nh)
  const paragraphs = section
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(p => p && !p.startsWith('```') && !p.startsWith('###'))
  if (!paragraphs.length) return ''
  return paragraphs[0]
    .replace(/\*\*/g, '')
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function escapeCSV(value) {
  const s = String(value ?? '')
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

function writeCSV(headers, rows) {
  const lines = [headers.join(',')]
  for (const row of rows) {
    lines.push(headers.map(h => escapeCSV(row[h] ?? '')).join(','))
  }
  return `${lines.join('\n')}\n`
}

const EXTRA_HEADERS = ['pitch_es', 'rationale_es', 'key_themes_es']

export function extractCubeEn(cube) {
  const out = { archetypes: [], decks: [] }
  const csvPath = path.join('cubes', cube, 'archetypes.csv')
  if (fs.existsSync(csvPath)) {
    const rows = parseCSV(fs.readFileSync(csvPath, 'utf8'))
    for (const r of rows) {
      out.archetypes.push({
        key: r.archetype,
        pitch: r.pitch || '',
        rationale: r.rationale || '',
        key_themes: r.key_themes || '',
      })
    }
  }
  const decksDir = path.join('cubes', cube, 'decks')
  if (fs.existsSync(decksDir)) {
    for (const name of fs.readdirSync(decksDir)) {
      if (name.startsWith('ignore') || name.startsWith('.')) continue
      const dj = path.join(decksDir, name, 'deck.json')
      if (!fs.existsSync(dj)) continue
      const data = JSON.parse(fs.readFileSync(dj, 'utf8'))
      const analysisPath = path.join(decksDir, name, 'analysis.md')
      const analysis = fs.existsSync(analysisPath) ? fs.readFileSync(analysisPath, 'utf8') : ''
      out.decks.push({
        slug: name,
        strategy: data.strategy || '',
        identity: data.identity || '',
        pitch: extractPitch(analysis),
      })
    }
  }
  return out
}

export function applyTranslations(cube, translations) {
  const csvPath = path.join('cubes', cube, 'archetypes.csv')
  const raw = fs.readFileSync(csvPath, 'utf8')
  const rows = parseCSV(raw)
  const byKey = Object.fromEntries((translations.archetypes || []).map(a => [a.key, a]))

  // Reconstruct headers from first CSV line via parseCSV of header-only
  const headerOnly = raw.split(/\r?\n/)[0] + '\n'
  const headerRow = []
  {
    let cell = ''
    let inQuotes = false
    const text = headerOnly
    for (let i = 0; i < text.length; i++) {
      const c = text[i]
      const n = text[i + 1]
      if (inQuotes) {
        if (c === '"' && n === '"') { cell += '"'; i++ }
        else if (c === '"') inQuotes = false
        else cell += c
      } else if (c === '"') inQuotes = true
      else if (c === ',' || c === '\n' || c === '\r') {
        headerRow.push(cell.trim())
        cell = ''
        if (c === '\r' && n === '\n') i++
        if (c === '\n' || c === '\r') break
      } else cell += c
    }
    if (cell) headerRow.push(cell.trim())
  }
  const headers = [...headerRow]
  for (const h of EXTRA_HEADERS) {
    if (!headers.includes(h)) headers.push(h)
  }

  const outRows = rows.map(r => {
    const tr = byKey[r.archetype] || {}
    return {
      ...r,
      pitch_es: tr.pitch_es || r.pitch_es || '',
      rationale_es: tr.rationale_es || r.rationale_es || '',
      key_themes_es: tr.key_themes_es || r.key_themes_es || '',
    }
  })
  fs.writeFileSync(csvPath, writeCSV(headers, outRows))

  const deckBySlug = Object.fromEntries((translations.decks || []).map(d => [d.slug, d]))
  const decksDir = path.join('cubes', cube, 'decks')
  for (const name of fs.readdirSync(decksDir)) {
    if (name.startsWith('ignore') || name.startsWith('.')) continue
    const dj = path.join(decksDir, name, 'deck.json')
    if (!fs.existsSync(dj)) continue
    const data = JSON.parse(fs.readFileSync(dj, 'utf8'))
    const tr = deckBySlug[name] || {}
    if (tr.strategy_es) data.strategy_es = tr.strategy_es
    if (tr.identity_es) data.identity_es = tr.identity_es
    if (tr.pitch_es) data.pitch_es = tr.pitch_es
    fs.writeFileSync(dj, `${JSON.stringify(data, null, 2)}\n`)
  }
}

const CUBES = fs.readdirSync('cubes').filter(n => {
  const p = path.join('cubes', n)
  return fs.statSync(p).isDirectory()
    && !n.startsWith('.')
    && !n.startsWith('ignore')
    && fs.existsSync(path.join(p, 'archetypes.csv'))
})

const mode = process.argv[2] || ''
const isMain = process.argv[1]
  && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))

if (isMain && mode === 'extract') {
  fs.mkdirSync('scripts/i18n-source', { recursive: true })
  const only = process.argv[3]
  const targets = only ? [only] : CUBES
  for (const cube of targets) {
    const out = extractCubeEn(cube)
    fs.writeFileSync(
      path.join('scripts/i18n-source', `${cube}.en.json`),
      `${JSON.stringify(out, null, 2)}\n`,
    )
    console.log(cube, 'archetypes', out.archetypes.length, 'decks', out.decks.length)
  }
} else if (isMain && mode === 'apply') {
  const only = process.argv[3]
  const targets = only ? [only] : CUBES
  for (const cube of targets) {
    const trPath = path.join('scripts/i18n-source', `${cube}.es.json`)
    if (!fs.existsSync(trPath)) {
      console.warn('missing', trPath)
      continue
    }
    const translations = JSON.parse(
      (() => {
        const raw = fs.readFileSync(trPath, 'utf8')
        return raw.charCodeAt(0) === 0xFEFF ? raw.slice(1) : raw
      })(),
    )
    applyTranslations(cube, translations)
    console.log('applied', cube)
  }
} else if (isMain && mode === 'list') {
  for (const cube of CUBES) console.log(cube)
}
