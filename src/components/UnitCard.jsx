import { Link } from 'react-router-dom'

import Plate from './Plate.jsx'
import { platesFor, unitPath } from '../data/shared.js'
import { useLang } from '../i18n.jsx'

/* One of the two apartments, as a card. `unitId` keys into both shared.js
   and the language files. */
export default function UnitCard({ unitId }) {
  const { t } = useLang()
  const copy = t.units[unitId]
  const plate = platesFor(unitId)[0]

  return (
    <article className="unit-card">
      {plate && <Plate plate={plate} />}

      <div className="unit-card__body">
        <h3 className="unit-card__name">{copy.name}</h3>
        <p className="unit-card__tagline">{copy.tagline}</p>

        <ul className="pill-list">
          {copy.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>

        <ul className="tick-list">
          {copy.highlights.map((item) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link className="btn btn--quiet unit-card__cta" to={unitPath(unitId)}>
          {t.ui.viewUnit}
        </Link>
      </div>
    </article>
  )
}