import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { property, units } from '../data/shared.js'
import { fill, useLang } from '../i18n.jsx'

const EMPTY = {
  name: '',
  email: '',
  unit: 'either',
  arrive: '',
  depart: '',
  guests: '2',
  message: '',
}

/* A single floor sleeps four; only the whole house goes above that. */
const UNIT_CAPACITY = 4
const UNIT_IDS = units.map((unit) => unit.id)

/* There is no server behind this site, so the form does the one honest thing
   it can: it writes the enquiry and hands it to the visitor's own mail app.
   Nothing is sent anywhere without them pressing send. The subject line and
   the field labels inside the email follow whichever language they are using.

   If you would rather the form posted directly, sign up for a free form
   service (Formspree, Basin, Netlify Forms) and replace `handleSubmit` with a
   fetch to the endpoint they give you. Everything else stays as it is. */
export default function Contact() {
  const { t } = useLang()
  const copy = t.contact

  /* /contact?unit=upper arrives pre-filled, so the "ask about this floor"
     buttons on the unit pages do not make anyone pick twice. */
  const [params] = useSearchParams()
  const requested = params.get('unit')
  const [values, setValues] = useState(() => ({
    ...EMPTY,
    unit:
      requested && [...UNIT_IDS, 'house', 'either'].includes(requested)
        ? requested
        : EMPTY.unit,
  }))
  const [errors, setErrors] = useState({})
  const [handedOff, setHandedOff] = useState(false)

  function update(field) {
    return (event) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }))
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  /* Errors are looked up at submit time rather than stored as text, so a
     visitor who switches language mid-form does not end up with a Croatian
     message under a German label. */
  function validate() {
    const next = {}
    if (!values.name.trim()) next.name = 'name'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'email'
    if (!values.arrive) next.arrive = 'arrive'
    if (!values.depart) next.depart = 'depart'
    else if (values.arrive && values.depart <= values.arrive) next.depart = 'order'
    if (UNIT_IDS.includes(values.unit) && Number(values.guests) > UNIT_CAPACITY) {
      next.guests = 'capacity'
    }
    return next
  }

  function handleSubmit(event) {
    event.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    const m = copy.mail
    const subject = fill(m.subject, {
      unit: copy.unitOptions[values.unit],
      arrive: values.arrive,
      depart: values.depart,
      guests: values.guests,
    })
    const body = [
      `${m.name}: ${values.name}`,
      `${m.email}: ${values.email}`,
      `${m.unit}: ${copy.unitOptions[values.unit]}`,
      `${m.arrive}: ${values.arrive}`,
      `${m.depart}: ${values.depart}`,
      `${m.guests}: ${values.guests}`,
      '',
      values.message || m.noMessage,
    ].join('\n')

    window.location.href = `mailto:${property.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    setHandedOff(true)
  }

  const errorFor = (field) => (errors[field] ? copy.errors[errors[field]] : null)

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${property.coords.lat},${property.coords.lng}`

  return (
    <>
      <section className="band band--paper band--flush">
        <div className="shell page-head">
          <p className="label">{copy.label}</p>
          <h1>{copy.title}</h1>
          <p className="lead">{copy.lead}</p>
        </div>
      </section>

      <section className="band band--paper">
        <div className="shell split">
          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="form__row form__row--two">
              <div className="field">
                <label className="field__label" htmlFor="name">
                  {copy.fields.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={update('name')}
                  aria-invalid={Boolean(errors.name)}
                />
                {errorFor('name') && (
                  <p className="field__error">{errorFor('name')}</p>
                )}
              </div>

              <div className="field">
                <label className="field__label" htmlFor="email">
                  {copy.fields.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={update('email')}
                  aria-invalid={Boolean(errors.email)}
                />
                {errorFor('email') && (
                  <p className="field__error">{errorFor('email')}</p>
                )}
              </div>
            </div>

            <div className="field">
              <label className="field__label" htmlFor="unit">
                {copy.fields.unit}
              </label>
              <select
                id="unit"
                name="unit"
                value={values.unit}
                onChange={update('unit')}
              >
                {units.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {copy.unitOptions[unit.id]}
                  </option>
                ))}
                <option value="house">{copy.unitOptions.house}</option>
                <option value="either">{copy.unitOptions.either}</option>
              </select>
            </div>

            <div className="form__row form__row--two">
              <div className="field">
                <label className="field__label" htmlFor="arrive">
                  {copy.fields.arrive}
                </label>
                <input
                  id="arrive"
                  name="arrive"
                  type="date"
                  value={values.arrive}
                  onChange={update('arrive')}
                  aria-invalid={Boolean(errors.arrive)}
                />
                {errorFor('arrive') && (
                  <p className="field__error">{errorFor('arrive')}</p>
                )}
              </div>

              <div className="field">
                <label className="field__label" htmlFor="depart">
                  {copy.fields.depart}
                </label>
                <input
                  id="depart"
                  name="depart"
                  type="date"
                  value={values.depart}
                  onChange={update('depart')}
                  aria-invalid={Boolean(errors.depart)}
                />
                {errorFor('depart') && (
                  <p className="field__error">{errorFor('depart')}</p>
                )}
              </div>
            </div>

            <div className="field">
              <label className="field__label" htmlFor="guests">
                {copy.fields.guests}
              </label>
              <select
                id="guests"
                name="guests"
                value={values.guests}
                onChange={update('guests')}
                aria-invalid={Boolean(errors.guests)}
              >
                {copy.guestOptions.map((option, index) => (
                  <option key={option} value={String(index + 1)}>
                    {option}
                  </option>
                ))}
              </select>
              {errorFor('guests') ? (
                <p className="field__error">{errorFor('guests')}</p>
              ) : (
                <p className="field__hint">{copy.guestsNote}</p>
              )}
            </div>

            <div className="field">
              <label className="field__label" htmlFor="message">
                {copy.fields.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={update('message')}
                placeholder={copy.placeholder}
              />
            </div>

            <div>
              <button className="btn btn--solid" type="submit">
                {copy.submit}
              </button>
            </div>

            <p className="form__note">
              {handedOff
                ? fill(copy.noteAfter, { email: property.email })
                : copy.noteBefore}
            </p>
          </form>

          <aside className="details">
            <div className="detail">
              <p className="label">{copy.aside.email}</p>
              <p className="detail__value">
                <a href={`mailto:${property.email}`}>{property.email}</a>
              </p>
            </div>
            <div className="detail">
              <p className="label">{copy.aside.phone}</p>
              <p className="detail__value">
                <a href={`tel:${property.phoneHref}`}>{property.phone}</a>
              </p>
            </div>
            <div className="detail">
              <p className="label">{copy.aside.address}</p>
              <p className="detail__value detail__value--plain">
                {property.address}
              </p>
              <p className="detail__link">
                <a className="link" href={mapUrl} target="_blank" rel="noreferrer">
                  {t.ui.openInMaps}
                </a>
              </p>
            </div>
            <div className="detail">
              <p className="label">{copy.aside.languages}</p>
              <p className="detail__value detail__value--plain">
                {t.languages.join(' · ')}
              </p>
            </div>
            <div className="detail">
              <p className="label">{copy.aside.open}</p>
              <p className="detail__value detail__value--plain">{t.season}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
