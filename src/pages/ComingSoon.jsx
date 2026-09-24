/* ==========================================================================
   ComingSoon
   --------------------------------------------------------------------------
   A page that exists, is linked, and is honest about being empty. It takes
   its heading from the nav label, so there is nothing to keep in step: add
   the route in shared.js, the label in the three language files, and the
   page is done until there is something to put in it.
   ========================================================================== */

import { useLang } from '../i18n.jsx'

export default function ComingSoon({ navKey }) {
  const { t } = useLang()

  return (
    <section className="band band--paper band--flush">
      <div className="shell soon">
        <h1>{t.nav[navKey]}</h1>
        <hr className="rule soon__rule" />
        <p className="soon__mark sounding">{t.soon.text}</p>
      </div>
    </section>
  )
}