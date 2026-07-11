import { useI18n } from '../i18n/useT.js'

export default function LanguageToggle() {
  const { locale, setLocale, t } = useI18n()

  return (
    <div className="lang-toggle" role="group" aria-label={t('lang.group')}>
      <button
        type="button"
        className={`lang-toggle-btn ${locale === 'en' ? 'active' : ''}`}
        aria-pressed={locale === 'en'}
        aria-label={t('lang.switchTo', { lang: 'EN' })}
        onClick={() => setLocale('en')}
      >
        {t('lang.en')}
      </button>
      <span className="lang-toggle-sep" aria-hidden="true">·</span>
      <button
        type="button"
        className={`lang-toggle-btn ${locale === 'es' ? 'active' : ''}`}
        aria-pressed={locale === 'es'}
        aria-label={t('lang.switchTo', { lang: 'ES' })}
        onClick={() => setLocale('es')}
      >
        {t('lang.es')}
      </button>
    </div>
  )
}
