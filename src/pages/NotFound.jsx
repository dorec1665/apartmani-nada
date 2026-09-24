import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'

export default function NotFound() {
  const { t } = useLang()

  return (
    <section className="band band--paper band--flush">
      <div className="shell notfound">
        <p className="label">{t.notFound.label}</p>
        <h1>{t.notFound.title}</h1>
        <p className="lead">{t.notFound.lead}</p>
        <Link className="btn btn--quiet" to="/">
          {t.notFound.cta}
        </Link>
      </div>
    </section>
  )
}
