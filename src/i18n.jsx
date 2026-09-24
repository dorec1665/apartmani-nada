/* ==========================================================================
   Language
   --------------------------------------------------------------------------
   Croatian is the default. English and German are offered alongside it.

   The choice is remembered in localStorage, so a returning visitor lands in
   the language they picked last time. On a first visit we look at the browser
   language and fall back to Croatian if it is not one of the three.

   To add a fourth language: copy src/data/en.js, translate it, import it
   below, and add one entry to LOCALES. Nothing else needs touching.
   ========================================================================== */

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import hr from './data/hr.js'
import en from './data/en.js'
import de from './data/de.js'

export const LOCALES = [
  { code: 'hr', short: 'HR', name: 'Hrvatski', content: hr },
  { code: 'en', short: 'EN', name: 'English', content: en },
  { code: 'de', short: 'DE', name: 'Deutsch', content: de },
]

const FALLBACK = 'hr'
const STORAGE_KEY = 'apartman-lang'

function isKnown(code) {
  return LOCALES.some((locale) => locale.code === code)
}

function detect() {
  // A language they chose before always wins.
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (isKnown(saved)) return saved
  } catch {
    // Private browsing can block storage entirely. Not worth failing over.
  }

  // Otherwise take the first browser preference we actually speak.
  const preferred = navigator.languages?.length
    ? navigator.languages
    : [navigator.language || '']

  for (const tag of preferred) {
    const code = String(tag).slice(0, 2).toLowerCase()
    if (isKnown(code)) return code
  }

  return FALLBACK
}

/* The room list is written once and shared, because both apartments have the
   same layout. A floor can override any room through its `roomNotes`, which
   is how the bathrooms differ. */
export function roomsFor(t, unitId) {
  const notes = t.units[unitId]?.roomNotes ?? {}
  return t.rooms.map((room) => ({ ...room, ...(notes[room.id] ?? {}) }))
}

/* Fills {placeholders} in a translated string: fill(t.contact.mail.subject, { arrive }) */
export function fill(template, values = {}) {
  return String(template).replace(/\{(\w+)\}/g, (match, key) =>
    key in values ? String(values[key]) : match
  )
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detect)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Ignore: the site still works, it just will not remember the choice.
    }

    const locale = LOCALES.find((item) => item.code === lang)
    if (!locale) return

    // Keep the document itself honest — screen readers and search engines
    // both read these, and neither sees React state.
    document.documentElement.lang = lang
    document.title = locale.content.meta.title

    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', locale.content.meta.description)
    }
  }, [lang])

  const value = useMemo(() => {
    const locale = LOCALES.find((item) => item.code === lang) ?? LOCALES[0]
    return { lang, setLang, locale, t: locale.content }
  }, [lang])

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLang() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLang() must be called inside <LanguageProvider>')
  }
  return context
}
