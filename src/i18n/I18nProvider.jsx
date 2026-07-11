import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import en from './en.json'
import es from './es.json'

const STORAGE_KEY = 'cube-drafter-locale'
const LOCALES = { en, es }
const DEFAULT_LOCALE = 'en'

export const I18nContext = createContext(null)

function lookup(dict, key) {
  return key.split('.').reduce((obj, part) => (obj == null ? undefined : obj[part]), dict)
}

function interpolate(template, vars = {}) {
  if (!template || typeof template !== 'string') return template ?? ''
  return template.replace(/\{(\w+)\}/g, (_, name) => (
    vars[name] != null ? String(vars[name]) : `{${name}}`
  ))
}

function readStoredLocale() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && LOCALES[stored]) return stored
  } catch {
    // ignore
  }
  return DEFAULT_LOCALE
}

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(readStoredLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // ignore
    }
  }, [locale])

  const setLocale = useCallback((next) => {
    if (LOCALES[next]) setLocaleState(next)
  }, [])

  const t = useCallback((key, vars) => {
    const dict = LOCALES[locale] || LOCALES[DEFAULT_LOCALE]
    const value = lookup(dict, key) ?? lookup(LOCALES[DEFAULT_LOCALE], key) ?? key
    return interpolate(value, vars)
  }, [locale])

  const tp = useCallback((key, count, vars = {}) => {
    const suffix = count === 1 ? '_one' : '_other'
    return t(`${key}${suffix}`, { ...vars, count })
  }, [t])

  const value = useMemo(() => ({
    locale,
    setLocale,
    t,
    tp,
  }), [locale, setLocale, t, tp])

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  )
}
