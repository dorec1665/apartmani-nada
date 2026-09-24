import { LOCALES, useLang } from '../i18n.jsx'

export default function LangSwitch() {
  const { lang, setLang, t } = useLang()

  return (
    <div className="langs" role="group" aria-label={t.ui.language}>
      {LOCALES.map((locale) => {
        const active = locale.code === lang
        return (
          <button
            key={locale.code}
            type="button"
            className={active ? 'langs__btn is-active' : 'langs__btn'}
            lang={locale.code}
            aria-pressed={active}
            title={locale.name}
            onClick={() => setLang(locale.code)}
          >
            {locale.short}
          </button>
        )
      })}
    </div>
  )
}
