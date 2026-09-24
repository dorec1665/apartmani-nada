import Closer from '../components/Closer.jsx'
import Plate from '../components/Plate.jsx'
import { plates } from '../data/shared.js'
import { useLang } from '../i18n.jsx'

export default function GettingHere() {
  const { t } = useLang()

  return (
    <>
      <section className="band band--paper band--flush">
        <div className="shell page-head">
          <p className="label">{t.journey.label}</p>
          <h1>{t.journey.title}</h1>
          <p className="lead">{t.journey.lead}</p>
        </div>
      </section>

      {/* The order of these genuinely matters, so they are numbered. */}
      <section className="band band--paper">
        <div className="shell">
          <div className="section-head">
            <p className="label">{t.journey.legsLabel}</p>
            <h2>{t.journey.legsTitle}</h2>
          </div>
          <div className="legs">
            {t.journey.legs.map((leg) => (
              <article className="leg" key={leg.stage}>
                <h3 className="leg__stage">{leg.stage}</h3>
                <p className="leg__body">{leg.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--paper-deep">
        <div className="shell split">
          <div className="prose">
            <div className="section-head section-head--wide">
              <p className="label">{t.journey.practicalLabel}</p>
              <h2>{t.journey.car.title}</h2>
            </div>
            <p>{t.journey.car.body}</p>
            <h3 className="prose__break">{t.journey.weather.title}</h3>
            <p>{t.journey.weather.body}</p>
          </div>
          <Plate plate={plates[7]} />
        </div>
      </section>

      <Closer title={t.journey.closerTitle} body={t.journey.closerBody} />
    </>
  )
}
