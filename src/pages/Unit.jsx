import { Link, Navigate, useParams } from 'react-router-dom'

import PhotoGrid from '../components/PhotoGrid.jsx'
import HousePlan from '../components/HousePlan.jsx'
import Closer from '../components/Closer.jsx'
import UnitCard from '../components/UnitCard.jsx'
import { findUnit, platesFor, rateRows, units } from '../data/shared.js'
import { roomsFor, useLang } from '../i18n.jsx'

/* One apartment in full. Reached at /apartments/upper and /apartments/lower;
   the ids come from `units` in shared.js, so adding a third floor one day
   would need no change here. */
export default function Unit() {
  const { unitId } = useParams()
  const { t } = useLang()

  const unit = findUnit(unitId)
  if (!unit) return <Navigate to="/apartments" replace />

  const copy = t.units[unitId]
  const plates = platesFor(unitId)
  const other = units.find((item) => item.id !== unitId)

  return (
    <>
      <section className="band band--paper band--flush">
        <div className="shell page-head">
          <p className="label">
            <Link className="page-head__back" to="/apartments">
              {t.ui.backToApartments}
            </Link>
          </p>
          <h1>{copy.name}</h1>
          <p className="lead">{copy.tagline}</p>
          <ul className="pill-list">
            {copy.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <p className="page-head__actions">
            <Link className="btn btn--solid" to={`/contact?unit=${unitId}`}>
              {t.ui.askUnit}
            </Link>
          </p>
        </div>
      </section>

      {/* --- What this floor is ------------------------------------------ */}
      <section className="band band--paper">
        <div className="shell split split--plan">
          <div>
            <div className="section-head section-head--wide">
              <p className="label">{t.unitPage.factsLabel}</p>
              <h2>{t.unitPage.aboutTitle}</h2>
            </div>
            <p>{copy.body}</p>
            <ul className="tick-list tick-list--spaced">
              {copy.highlights.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <HousePlan activeUnit={unitId} />
        </div>
      </section>

      {/* --- Photos ------------------------------------------------------- */}
      <section className="band band--deep">
        <div className="shell">
          <PhotoGrid plates={plates} />
        </div>
      </section>

      {/* --- Room by room ------------------------------------------------- */}
      <section className="band band--paper">
        <div className="shell">
          <div className="section-head">
            <p className="label">{t.unitPage.roomsLabel}</p>
            <h2>{t.unitPage.roomsTitle}</h2>
          </div>
          <div className="rooms">
            {roomsFor(t, unitId).map((room) => (
              <article className="room" key={room.id}>
                <h3 className="room__name">{room.name}</h3>
                <p className="room__body">{room.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- Equipment ---------------------------------------------------- */}
      <section className="band band--paper-deep">
        <div className="shell">
          <div className="section-head">
            <p className="label">{t.unitPage.includedLabel}</p>
            <h2>{t.unitPage.includedTitle}</h2>
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
        </div>
      </section>

      {/* --- Rates for this floor only ------------------------------------ */}
      <section className="band band--deep">
        <div className="shell split">
          <div>
            <div className="section-head">
              <p className="label">
                {t.unitPage.ratesLabel} {new Date().getFullYear()}
              </p>
              <h2>{t.unitPage.ratesTitle}</h2>
            </div>
            <ul className="rates">
              {rateRows.map((row) => {
                const text = t.rates.rows[row.id]
                return (
                  <li className="rate" key={row.id}>
                    <span className="rate__period">{text.period}</span>
                    <span className="rate__price sounding">
                      {t.money.before}
                      {row.prices[unitId]}
                      {t.money.after}
                    </span>
                    <span className="rate__min">{text.min}</span>
                  </li>
                )
              })}
            </ul>
            <p className="soundings__note rates__note">{t.rates.note}</p>
          </div>

          <div className="rates-aside">
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

      {/* --- The other floor ---------------------------------------------- */}
      {other && (
        <section className="band band--paper">
          <div className="shell">
            <div className="section-head">
              <p className="label">{t.unitPage.otherLabel}</p>
              <h2>{t.unitPage.otherTitle}</h2>
            </div>
            <div className="unit-grid unit-grid--single">
              <UnitCard unitId={other.id} />
            </div>
          </div>
        </section>
      )}

      <Closer />
    </>
  )
}