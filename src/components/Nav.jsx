import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import LangSwitch from './LangSwitch.jsx'
import { property, routes } from '../data/shared.js'
import { useLang } from '../i18n.jsx'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { t } = useLang()

  // Close the mobile panel whenever the route changes.
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="nav">
      <div className="shell nav__inner">
        <NavLink to="/" className="nav__mark">
          <span className="nav__mark-name">{property.name}</span>
          <span className="nav__mark-place">{property.place}</span>
        </NavLink>

        <nav id="nav-links" className="nav__links" data-open={open}>
          {routes.map((route) => (
            <NavLink
              key={route.to}
              to={route.to}
              end={route.to === '/'}
              /* /apartments stays lit while you are on /apartments/upper */
              className={({ isActive }) =>
                isActive ? 'nav__link is-active' : 'nav__link'
              }
            >
              {t.nav[route.key]}
            </NavLink>
          ))}
        </nav>

        {/* The switcher stays in the top bar on mobile, so changing language
            never requires opening the menu first. */}
        <div className="nav__end">
          <LangSwitch />
          <button
            className="nav__toggle"
            type="button"
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? t.ui.close : t.ui.menu}
          </button>
        </div>
      </div>
    </header>
  )
}
