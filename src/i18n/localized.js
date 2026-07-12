/**
 * Pick a localized string with English fallback.
 * @param {{ en?: string, es?: string } | string | null | undefined} value
 * @param {string} locale
 */
export function pickLocalized(value, locale = 'en') {
  if (value == null) return ''
  if (typeof value === 'string') return value

  const en = (value.en || '').trim()
  const es = (value.es || '').trim()

  if (locale === 'es' && es) return es
  return en || es
}

/** Build a bilingual string bag from EN + optional ES fields. */
export function localizedBag(en, es) {
  return {
    en: (en || '').trim(),
    es: (es || '').trim(),
  }
}
