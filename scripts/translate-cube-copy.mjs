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
      const identity = data.identity || ''
      const pitch = (data.pitch || '').trim() || extractPitch(analysis)

      // Most decks repeat their identity verbatim as the analysis pitch. Emit it
      // once so it is translated once; applyTranslations copies identity_es back
      // into pitch_es for these.
      const pitchRepeatsIdentity = Boolean(pitch) && pitch === identity.trim()
      out.decks.push({
        slug: name,
        strategy: data.strategy || '',
        identity,
        pitch: pitchRepeatsIdentity ? '' : pitch,
        ...(pitchRepeatsIdentity ? { pitch_same_as_identity: true } : {}),
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

    if (tr.pitch_es) {
      data.pitch_es = tr.pitch_es
    } else if (
      tr.identity_es
      && (data.pitch || '').trim()
      && (data.pitch || '').trim() === (data.identity || '').trim()
    ) {
      // Extraction left the pitch out because it repeats the identity verbatim.
      data.pitch_es = tr.identity_es
    }
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

const I18N_DIR = 'scripts/i18n-source'

// A cube can hold 120 decks; one file per cube is far too large to translate in
// a single pass, so decks are split into chunks that each fit comfortably.
const DECKS_PER_CHUNK = Number(process.env.I18N_CHUNK_SIZE) || 15

const CHUNK_PATTERN = /\.decks-chunk-\d+\.en\.json$/

export function writeExtraction(cube, out) {
  fs.mkdirSync(I18N_DIR, { recursive: true })
  const written = []

  // Drop stale chunks first: a smaller deck count must not leave orphans behind.
  for (const f of fs.readdirSync(I18N_DIR)) {
    if (f.startsWith(`${cube}.`) && CHUNK_PATTERN.test(f)) {
      fs.unlinkSync(path.join(I18N_DIR, f))
    }
  }

  const archPath = path.join(I18N_DIR, `${cube}.archetypes.en.json`)
  fs.writeFileSync(archPath, `${JSON.stringify({ cube, archetypes: out.archetypes }, null, 2)}\n`)
  written.push(archPath)

  for (let i = 0; i < out.decks.length; i += DECKS_PER_CHUNK) {
    const n = Math.floor(i / DECKS_PER_CHUNK) + 1
    const p = path.join(I18N_DIR, `${cube}.decks-chunk-${n}.en.json`)
    const body = { cube, chunk: n, decks: out.decks.slice(i, i + DECKS_PER_CHUNK) }
    fs.writeFileSync(p, `${JSON.stringify(body, null, 2)}\n`)
    written.push(p)
  }
  return written
}

/** Merge every `<cube>.*.es.json` into a single translation bundle. */
export function loadTranslations(cube) {
  if (!fs.existsSync(I18N_DIR)) return null
  const merged = { archetypes: [], decks: [] }
  let found = false

  for (const f of fs.readdirSync(I18N_DIR).sort()) {
    if (!f.startsWith(`${cube}.`) || !f.endsWith('.es.json')) continue
    const raw = fs.readFileSync(path.join(I18N_DIR, f), 'utf8')
    const data = JSON.parse(raw.charCodeAt(0) === 0xFEFF ? raw.slice(1) : raw)
    merged.archetypes.push(...(data.archetypes || []))
    merged.decks.push(...(data.decks || []))
    found = true
  }
  return found ? merged : null
}

if (isMain && mode === 'extract') {
  const only = process.argv[3]
  const targets = only ? [only] : CUBES
  for (const cube of targets) {
    const out = extractCubeEn(cube)
    const files = writeExtraction(cube, out)
    console.log(`${cube}: ${out.archetypes.length} archetypes, ${out.decks.length} decks -> ${files.length} file(s)`)
  }
} else if (isMain && mode === 'apply') {
  const only = process.argv[3]
  const targets = only ? [only] : CUBES
  for (const cube of targets) {
    const translations = loadTranslations(cube)
    if (!translations) {
      console.warn(`missing ${I18N_DIR}/${cube}.*.es.json`)
      continue
    }
    applyTranslations(cube, translations)
    console.log(`applied ${cube}: ${translations.archetypes.length} archetypes, ${translations.decks.length} decks`)
  }
} else if (isMain && mode === 'list') {
  for (const cube of CUBES) console.log(cube)
}
