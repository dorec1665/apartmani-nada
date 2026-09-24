import { Link } from 'react-router-dom'

import SeaChart from '../components/SeaChart.jsx'
import Soundings from '../components/Soundings.jsx'
import Plate from '../components/Plate.jsx'
import HousePlan from '../components/HousePlan.jsx'
import UnitCard from '../components/UnitCard.jsx'
import Closer from '../components/Closer.jsx'

import { featuredPlates, units } from '../data/shared.js'
import { useLang } from '../i18n.jsx'

export default function Home() {
  const { t } = useLang()
  const featured = featuredPlates()

  return (
    <>
      {/* --- Hero: the chart is the thesis ------------------------------- */}
      <section className="hero">
        <SeaChart label={t.ui.chartMarker} />
        <div className="shell hero__inner">
          <p className="label">{t.hero.eyebrow}</p>
          <h1 className="hero__title">{t.hero.title}</h1>
          <p className="lead">{t.hero.lead}</p>

          <ul className="hero__facts">
            {t.hero.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>

          <div className="hero__actions">
            <Link className="btn btn--solid" to="/contact">
              {t.hero.primaryCta}
            </Link>
            <Link className="btn btn--quiet" to="/apartments">
              {t.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      {/* --- Distances --------------------------------------------------- */}
      <section className="band band--paper">
        <div className="shell">
          <Soundings />
        </div>
      </section>

      {/* --- Who we are -------------------------------------------------- */}
      <section className="band band--paper-deep">
        <div className="shell split split--plan">
          <div className="prose">
            <div className="section-head section-head--wide">
              <p className="label">{t.intro.label}</p>
              <h2>{t.intro.title}</h2>
            </div>
            {t.intro.body.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
          <HousePlan />
        </div>
      </section>

      {/* --- The house itself -------------------------------------------- */}
      <section className="band band--deep">
        <div className="shell">
          <div className="section-head">
            <p className="label">{t.home.glimpseLabel}</p>
            <h2>{t.home.glimpseTitle}</h2>
          </div>
          <div className="plate-strip">
            {featured.map((plate) => (
              <Plate key={plate.id} plate={plate} />
            ))}
          </div>
          <p className="after-grid">
            <Link className="link" to="/gallery">
              {t.home.glimpseLink}
            </Link>
          </p>
        </div>
      </section>

      {/* --- The two apartments ------------------------------------------ */}
      <section className="band band--paper">
        <div className="shell">
          <div className="section-head section-head--wide">
            <p className="label">{t.home.unitsLabel}</p>
            <h2>{t.home.unitsTitle}</h2>
            <p>{t.home.unitsLead}</p>
          </div>
          <div className="unit-grid">
            {units.map((unit) => (
              <UnitCard key={unit.id} unitId={unit.id} />
            ))}
          </div>
        </div>
      </section>

      <Closer />
    </>
  )
}