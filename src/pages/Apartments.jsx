import HousePlan from '../components/HousePlan.jsx'
import UnitCard from '../components/UnitCard.jsx'
import RatesTable from '../components/RatesTable.jsx'
import Closer from '../components/Closer.jsx'
import { units } from '../data/shared.js'
import { useLang } from '../i18n.jsx'

export default function Apartments() {
  const { t } = useLang()

  return (
    <>
      <section className="band band--paper band--flush">
        <div className="shell page-head">
          <p className="label">{t.apartments.label}</p>
          <h1>{t.apartments.title}</h1>
          <p className="lead">{t.apartments.lead}</p>
        </div>
      </section>

      {/* --- The layout, drawn ------------------------------------------- */}
      <section className="band band--paper">
        <div className="shell split split--plan">
          <div>
            <div className="section-head section-head--wide">
              <p className="label">{t.plan.label}</p>
              <h2>{t.plan.title}</h2>
            </div>
            <p>{t.apartments.lead}</p>
            <p className="soundings__note">{t.plan.note}</p>
          </div>
          <HousePlan />
        </div>
      </section>

      {/* --- The two units ----------------------------------------------- */}
      <section className="band band--paper-deep">
        <div className="shell">
          <div className="section-head">
            <p className="label">{t.apartments.chooseLabel}</p>
            <h2>{t.apartments.chooseTitle}</h2>
          </div>
          <div className="unit-grid">
            {units.map((unit) => (
              <UnitCard key={unit.id} unitId={unit.id} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Both together ----------------------------------------------- */}
      <section className="band band--deep">
        <div className="shell split">
          <div>
            <div className="section-head section-head--wide">
              <p className="label">{t.apartments.togetherLabel}</p>
              <h2>{t.house.name}</h2>
            </div>
            <p className="lead closer__body">{t.house.tagline}</p>
            <p className="prose__break">{t.house.body}</p>
          </div>
          <div>
            <ul className="pill-list pill-list--deep">
              {t.house.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            <ul className="tick-list tick-list--spaced">
              {t.house.highlights.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- What is identical on both floors ---------------------------- */}
      <section className="band band--paper">
        <div className="shell">
          <div className="section-head section-head--wide">
            <p className="label">{t.apartments.sameLabel}</p>
            <h2>{t.apartments.sameTitle}</h2>
          </div>
          <div className="amenities">
            {t.amenities.map((block) => (
              <div key={block.group}>
                <h3 className="amenity__group label">{block.group}</h3>
                <ul className="amenity__items">
                  {block.items.map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="soundings__note">{t.apartments.sameNote}</p>
        </div>
      </section>

      {/* --- Rates: all three options side by side ------------------------ */}
      <section className="band band--paper-deep">
        <div className="shell">
          <div className="section-head">
            <p className="label">
              {t.apartments.ratesLabel} {new Date().getFullYear()}
            </p>
            <h2>{t.apartments.ratesTitle}</h2>
          </div>

          <RatesTable />
          <p className="soundings__note rates__note">{t.rates.note}</p>

          <div className="rates-extras">
            <div>
              <h3 className="label aside__head">{t.apartments.inPrice}</h3>
              <ul className="tick-list">
                {t.rates.included.map((item) => (
                  <li key={item}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="label aside__head">{t.apartments.onTop}</h3>
              <ul className="tick-list">
                {t.rates.extra.map((item) => (
                  <li key={item}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- House rules -------------------------------------------------- */}
      <section className="band band--paper">
        <div className="shell">
          <div className="section-head">
            <p className="label">{t.apartments.rulesLabel}</p>
            <h2>{t.apartments.rulesTitle}</h2>
          </div>
          <ul className="rules">
            {t.houseRules.map((rule) => (
              <li key={rule}>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Closer />
    </>
  )
}
