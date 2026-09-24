import { rateColumns, rateRows } from '../data/shared.js'
import { useLang } from '../i18n.jsx'

/* The full three-column rates table: each season priced for the upper floor,
   the lower floor, and the whole house. Collapses into stacked blocks on a
   narrow screen (see .rate-table in pages.css). */
export default function RatesTable() {
  const { t } = useLang()

  const heading = {
    upper: t.units.upper.short,
    lower: t.units.lower.short,
    house: t.house.short,
  }

  return (
    <table className="rate-table">
      <thead>
        <tr>
          <th scope="col">{t.apartments.seasonCol}</th>
          {rateColumns.map((key) => (
            <th scope="col" key={key}>
              {heading[key]}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rateRows.map((row) => {
          const text = t.rates.rows[row.id]
          return (
            <tr key={row.id}>
              <th scope="row">
                <span className="rate-table__period">{text.period}</span>
                <span className="rate-table__min">{text.min}</span>
              </th>
              {rateColumns.map((key) => (
                <td key={key} data-label={heading[key]}>
                  <span className="rate-table__price sounding">
                    {t.money.before}
                    {row.prices[key]}
                    {t.money.after}
                  </span>
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
