import { Link } from 'react-router-dom'
import { property, routes } from '../data/shared.js'
import { useLang } from '../i18n.jsx'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__grid">
          <div>
            <p className="footer__title">
              {property.name}
              <br />
              {property.place}
            </p>
            <p className="footer__coords sounding">{property.coordsLabel}</p>
          </div>

          <div>
            <p className="label">{t.footer.pages}</p>
            <ul className="footer__list">
              {routes.map((route) => (
                <li key={route.to}>
                  <Link to={route.to}>{t.nav[route.key]}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label">{t.footer.reach}</p>
            <ul className="footer__list">
              <li>
                <a href={`mailto:${property.email}`}>{property.email}</a>
              </li>
              <li>
                <a href={`tel:${property.phoneHref}`}>{property.phone}</a>
              </li>
              <li>{property.address}</li>
            </ul>
          </div>

          <div>
            <p className="label">{t.footer.open}</p>
            <ul className="footer__list">
              <li>{t.season}</li>
              <li>{t.languages.join(', ')}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {property.owners} · {property.name}
          </span>
          <span>
            {t.footer.registration} {property.registrationId}
          </span>
        </div>
      </div>
    </footer>
  )
}
