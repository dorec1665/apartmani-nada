import { useLang } from '../i18n.jsx'

export default function Soundings() {
  const { t } = useLang()

  return (
    <div>
      <div className="section-head">
        <p className="label">{t.soundings.label}</p>
        <h2>{t.soundings.title}</h2>
      </div>

      <ul className="soundings">
        {t.soundings.items.map((item) => (
          <li className="soundings__row" key={item.label}>
            <span className="soundings__depth sounding">{item.depth}</span>
            <span className="soundings__label">{item.label}</span>
          </li>
        ))}
      </ul>

      <p className="soundings__note">{t.soundings.note}</p>
    </div>
  )
}
