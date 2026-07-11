import { generateSearchPdf } from './searchPdf.jsx'

export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export function downloadDeckFile(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType })
  downloadBlob(blob, filename)
}

export async function copyDeckFile(content, message) {
  await navigator.clipboard.writeText(content)
  alert(message)
}

/** All export modes available for a loaded deck. Strings use i18n keys. */
export function getDeckExportOptions(deckData) {
  if (!deckData) return []

  const options = []

  if (deckData.deckTsv) {
    options.push({
      id: 'tsv-download',
      name: 'deck.tsv',
      descKey: 'export.tsvDesc',
      group: 'tsv',
      categoryKey: 'export.categoryCubeCobra',
      actionType: 'download',
      accent: '#4a8c4a',
    })
    options.push({
      id: 'tsv-copy',
      nameKey: 'export.tsvCopyName',
      descKey: 'export.tsvCopyDesc',
      group: 'tsv',
      categoryKey: 'export.categoryCubeCobra',
      actionType: 'copy',
      accent: '#4a8c4a',
    })
  }

  if (deckData.analysisMd) {
    options.push({
      id: 'analysis-download',
      name: 'analysis.md',
      descKey: 'export.analysisDesc',
      group: 'analysis',
      categoryKey: 'export.categoryAnalysis',
      actionType: 'download',
      accent: '#7b6fd4',
    })
    options.push({
      id: 'analysis-copy',
      nameKey: 'export.analysisCopyName',
      descKey: 'export.analysisCopyDesc',
      group: 'analysis',
      categoryKey: 'export.categoryAnalysis',
      actionType: 'copy',
      accent: '#7b6fd4',
    })
  }

  if (deckData.deckMwDeck) {
    options.push({
      id: 'mwdeck-download',
      name: 'deck.mwDeck',
      descKey: 'export.mwdeckDesc',
      group: 'mwdeck',
      categoryKey: 'export.categoryMwdeck',
      actionType: 'download',
      accent: '#d4843a',
    })
    options.push({
      id: 'mwdeck-copy',
      nameKey: 'export.mwdeckCopyName',
      descKey: 'export.mwdeckCopyDesc',
      group: 'mwdeck',
      categoryKey: 'export.categoryMwdeck',
      actionType: 'copy',
      accent: '#d4843a',
    })
  }

  options.push({
    id: 'pdf-search',
    nameKey: 'export.pdfName',
    descKey: 'export.pdfDesc',
    group: 'pdf',
    categoryKey: 'export.categoryPdf',
    actionType: 'generate',
    accent: '#d4a843',
    featured: true,
  })

  return options
}

export function localizeExportOption(option, t) {
  return {
    ...option,
    name: option.nameKey ? t(option.nameKey) : option.name,
    desc: t(option.descKey),
    categoryLabel: t(option.categoryKey),
  }
}

/** Group export options by category for modal display. */
export function groupDeckExportOptions(options) {
  const groups = []
  const seen = new Set()

  for (const option of options) {
    if (seen.has(option.group)) continue
    seen.add(option.group)
    groups.push({
      key: option.group,
      label: option.categoryLabel,
      accent: option.accent,
      featured: option.featured,
      options: options.filter(o => o.group === option.group),
    })
  }

  return groups
}

export async function runDeckExport(optionId, deckData, deckName, t) {
  switch (optionId) {
    case 'tsv-download':
      downloadDeckFile(deckData.deckTsv, `${deckName}.tsv`, 'text/tab-separated-values')
      break
    case 'tsv-copy':
      await copyDeckFile(deckData.deckTsv, t('export.copiedTsv'))
      break
    case 'analysis-download':
      downloadDeckFile(deckData.analysisMd, `${deckName}-analysis.md`, 'text/markdown')
      break
    case 'analysis-copy':
      await copyDeckFile(deckData.analysisMd, t('export.copiedAnalysis'))
      break
    case 'mwdeck-download':
      downloadDeckFile(deckData.deckMwDeck, `${deckName}.mwDeck`, 'text/plain')
      break
    case 'mwdeck-copy':
      await copyDeckFile(deckData.deckMwDeck, t('export.copiedMwdeck'))
      break
    case 'pdf-search': {
      const blob = await generateSearchPdf(deckData, deckName, t)
      downloadBlob(blob, `${deckName}-busqueda.pdf`)
      break
    }
    default:
      throw new Error(t('export.unknownMode', { id: optionId }))
  }
}
