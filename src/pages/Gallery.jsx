import PhotoGrid from '../components/PhotoGrid.jsx'
import Closer from '../components/Closer.jsx'
import { platesFor } from '../data/shared.js'
import { useLang } from '../i18n.jsx'

/* Photos are grouped the way the house is: upper floor, lower floor, and the
   house itself. The bands alternate so two groups never run together. */
const GROUPS = [
  { id: 'house', band: 'band--paper' },
  { id: 'upper', band: 'band--paper-deep' },
  { id: 'lower', band: 'band--paper' },
]

export default function Gallery() {
  const { t } = useLang()

  return (
    <>
      <section className="band band--paper band--flush">
        <div className="shell page-head">
          <p className="label">{t.gallery.label}</p>
          <h1>{t.gallery.title}</h1>
          <p className="lead">{t.gallery.lead}</p>
        </div>
      </section>

      {GROUPS.map((group) => (
        <section className={`band ${group.band}`} key={group.id}>
          <div className="shell">
            <div className="section-head">
              <h2>{t.gallery.groups[group.id]}</h2>
            </div>
            <PhotoGrid plates={platesFor(group.id)} />
          </div>
        </section>
      ))}

      <Closer title={t.gallery.closerTitle} body={t.gallery.closerBody} />
    </>
  )
}