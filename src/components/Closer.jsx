import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'

/* `title` and `body` are optional overrides — pages pass their own so the
   closing band is not identical on all five. */
export default function Closer({ title, body }) {
  const { t } = useLang()

  return (
    <section className="band band--deep">
      <div className="shell closer">
        <p className="label">{t.closer.label}</p>
        <h2 className="closer__title">{title ?? t.closer.title}</h2>
        <p className="lead closer__body">{body ?? t.closer.body}</p>
        <Link className="btn btn--solid" to="/contact">
          {t.closer.cta}
        </Link>
      </div>
    </section>
  )
}
