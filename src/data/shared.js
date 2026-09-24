/* ==========================================================================
   Shared data — the same in every language
   --------------------------------------------------------------------------
   Anything that is a number, a coordinate, a file name or a route lives here,
   so a price can never drift between the Croatian and the German page.
   Wording lives in hr.js, en.js and de.js.
   ========================================================================== */

export const property = {
  name: 'Apartmani Nada',
  place: 'Vrulje, Gornji Karin',
  coords: { lat: 44.1454002, lng: 15.6331921 },
  coordsLabel: '44°08′43″N · 15°37′59″E',
  address: 'Vrulje, 23450 Gornji Karin, Croatia',
  registrationId: 'HR-AB-23-000000000', // your official rental registration number
  email: 'hello@apartmani-nada.hr',
  phone: '+385 91 000 0000',
  phoneHref: '+38591000000',
  owners: 'Ivana & Tonči',
}

/* --------------------------------------------------------------------------
   The two apartments.

   One per floor, each self-contained: its own entrance, kitchen, living room,
   two bedrooms and bathroom. They can be let separately or together.

   `id` is the URL segment (/apartments/upper), the key into the language
   files, and the price key in rateRows. Change it in all four data files.
   -------------------------------------------------------------------------- */
export const units = [
  {
    id: 'upper',
    floor: 2,
    area: 68, // m²
    sleeps: 4,
    bedrooms: 2,
    bathrooms: 1,
    outdoor: 'terrace', // both floors have the same big terrace
    stepFree: false,
    // The one structural difference: this floor's bathroom takes a small
    // alcove out of the corner of room 1, and the walk-in shower is in it.
    showerAlcove: true,
  },
  {
    id: 'lower',
    floor: 1,
    area: 64,
    sleeps: 4,
    bedrooms: 2,
    bathrooms: 1,
    outdoor: 'terrace',
    stepFree: true,
    showerAlcove: false,
  },
]

export const wholeHouse = {
  id: 'house',
  sleeps: 8,
  bedrooms: 4,
  bathrooms: 2,
  kitchens: 2,
  area: 132,
}

export function findUnit(id) {
  return units.find((unit) => unit.id === id)
}

/* Routes. /apartments/:unitId is generated from `units` above. */
export const routes = [
  { to: '/', key: 'home' },
  { to: '/apartments', key: 'apartments' },
  { to: '/gallery', key: 'gallery' },
  { to: '/beaches', key: 'beaches' },
  { to: '/hidden-gems', key: 'hiddenGems' },
  { to: '/getting-here', key: 'gettingHere' },
  { to: '/contact', key: 'contact' },
]

export function unitPath(id) {
  return `/apartments/${id}`
}

/* --------------------------------------------------------------------------
   Photos, in public/photos/. The file is named once here, for all three
   languages; the caption is written three times, in `captions`.

   group:  'upper' | 'lower' | 'house'   (house = exterior and shared)
   ratio:  leave it off and the photo is cropped to `photoRatio` below, like
           every other photo, so the grids line up. Set 'wide' (3:2),
           'square' (1:1) or 'tall' (3:4) on one plate to give that photo a
           different shape. A slot with no photo yet (src: null) needs one.
   -------------------------------------------------------------------------- */
export const plates = [
  // Upper apartment
  { id: 1, src: 'photos/dnevna_soba_gornji_kat.jpeg', group: 'upper' },
  { id: 2, src: 'photos/dnevna_soba_gornji_kat_2.jpeg', group: 'upper' },
  { id: 3, src: 'photos/soba_1_gornji_kat.jpeg', group: 'upper' },
  { id: 4, src: 'photos/soba_2_gornji_kat.jpeg', group: 'upper' },
  { id: 5, src: 'photos/soba_2_gornji_kat_ormari.jpeg', group: 'upper' },
  { id: 6, src: 'photos/kupaonica_gornji_kat.jpeg', group: 'upper' },
  { id: 7, src: 'photos/tus_gornji_kat.jpeg', group: 'upper' },

  // Lower apartment
  { id: 8, src: 'photos/donja_terasa_iz_dvorista.jpeg', group: 'lower' },
  { id: 9, src: 'photos/donja_terasa_iz_dvorista_2.jpeg', group: 'lower' },
  { id: 10, src: 'photos/donja_terasa_iz_dvorista_3.jpeg', group: 'lower' },
  { id: 11, src: 'photos/dnevna_soba_donji_kat.jpeg', group: 'lower' },
  { id: 12, src: 'photos/soba_1_donji_kat.jpeg', group: 'lower' },
  { id: 13, src: 'photos/soba_2_donji_kat.jpeg', group: 'lower' },
  { id: 14, src: 'photos/kupaonica_donji_kat.jpeg', group: 'lower' },

  // The house itself
  { id: 15, src: 'photos/kuca_s_ceste.jpeg', group: 'house' },
]

/* The shape every photo is cropped to, as a CSS aspect ratio. Change it here
   and the whole site follows — gallery, unit pages, cards and the home row.
   4 / 3 is a compromise: landscape enough for rooms, without cutting the
   portrait shots as hard as 3 / 2 would. Others worth trying: '3 / 2' for a
   wider, more magazine-like grid, or '1 / 1' for squares. */
export const photoRatio = '4 / 3'

export function platesFor(group) {
  return plates.filter((plate) => plate.group === group)
}

/* Turn a photo's file name into a URL that works on every page.
 *
 * `src` above is written without a leading slash, so it must not be handed
 * to the browser as-is: a relative URL resolves against whatever page you
 * happen to be on, and /apartments/upper is a level deeper than /gallery.
 * Prefixing Vite's base (set in vite.config.js) makes it absolute, and keeps
 * working if the site is later moved into a subfolder. */
export function photoUrl(src) {
  if (!src) return null
  return import.meta.env.BASE_URL + String(src).replace(/^\/+/, '')
}

/* The three photos the home page leads with. Change the ids to change them. */
export const featuredPlateIds = [15, 8, 1]

export function featuredPlates() {
  return featuredPlateIds
    .map((id) => plates.find((plate) => plate.id === id))
    .filter(Boolean)
}

/* --------------------------------------------------------------------------
   Prices in euro, per night. One row per season, one price per unit plus a
   price for taking the whole house (a little less than the two added up).
   -------------------------------------------------------------------------- */
export const rateRows = [
  { id: 'early', prices: { upper: 95, lower: 85, house: 165 } },
  { id: 'june', prices: { upper: 130, lower: 115, house: 225 } },
  { id: 'peak', prices: { upper: 165, lower: 150, house: 290 } },
  { id: 'late', prices: { upper: 130, lower: 115, house: 225 } },
  { id: 'autumn', prices: { upper: 95, lower: 85, house: 165 } },
]

/* Columns of the rates table, in order. */
export const rateColumns = ['upper', 'lower', 'house']