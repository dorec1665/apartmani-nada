import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import { useLang } from './i18n.jsx'

import Home from './pages/Home.jsx'
import Apartments from './pages/Apartments.jsx'
import Unit from './pages/Unit.jsx'
import Gallery from './pages/Gallery.jsx'
import GettingHere from './pages/GettingHere.jsx'
import ComingSoon from './pages/ComingSoon.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

/* Routers keep the scroll position when the URL changes, which feels broken
   on a site of separate pages. This resets it on every navigation. */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  const { t } = useLang()

  return (
    <div className="app">
      <a className="skip" href="#main">
        {t.ui.skip}
      </a>
      <ScrollToTop />
      <Nav />
      <main className="app__main" id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/apartments/:unitId" element={<Unit />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/beaches" element={<ComingSoon navKey="beaches" />} />
          <Route
            path="/hidden-gems"
            element={<ComingSoon navKey="hiddenGems" />}
          />
          <Route path="/getting-here" element={<GettingHere />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}