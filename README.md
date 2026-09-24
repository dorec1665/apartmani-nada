# Apartmani Nada

A static React site for Apartmani Nada — a house at Vrulje, on the shore of
the Karin Sea near Gornji Karin, with two self-contained apartments, one per
floor — in Croatian, English and German. No login, no
database, no backend — everything is plain files you can host anywhere.

## Run it

```bash
npm install
npm run dev
```

Then open the address it prints (usually `http://localhost:5173`).

```bash
npm run build     # writes a static site to dist/
npm run preview   # serves dist/ so you can check the build
```

## Pages

| Route | File | What it does |
| --- | --- | --- |
| `/` | `src/pages/Home.jsx` | Chart hero, distances, intro, photo strip, guest quotes |
| `/apartments` | `src/pages/Apartments.jsx` | Floor plan, both units compared, whole-house option, full rates table |
| `/apartments/upper`, `/apartments/lower` | `src/pages/Unit.jsx` | One apartment in full: rooms, photos, equipment, its own prices |
| `/gallery` | `src/pages/Gallery.jsx` | All nine photo plates |
| `/getting-here` | `src/pages/GettingHere.jsx` | Ferries from Split, car advice, the two local winds |
| `/contact` | `src/pages/Contact.jsx` | Enquiry form and direct contact details |

## The two apartments

The house has two floors. Each is a complete apartment — its own entrance,
kitchen, living room, two bedrooms and bathroom — so they let separately or
together.

That structure lives in the `units` array in `src/data/shared.js`:

```js
{ id: 'upper', floor: 2, area: 68, sleeps: 4, bedrooms: 2, outdoor: 'terrace' }
```

The `id` does four jobs at once: it is the URL segment (`/apartments/upper`),
the key into each language file (`units.upper`), the photo group, and the
price column. Change it and you change it in all four data files.

`src/components/HousePlan.jsx` draws the schematic from the owner's floor
plan: two identical floors stacked, rooms 1 and 2 down the left, the bathroom
a narrow slot beside the kitchen, a small hallway behind the kitchen, the
living room across the bottom and the big terrace full height on the right.
The external staircase and the outside shower sit in the band between the
floors. Each floor is a link to its own page. It is a diagram of how the house is
divided, not a drawing of the building, because that division is the first
thing a guest needs to understand.

Prices are per season per option in `rateRows`, with three columns: `upper`,
`lower`, and `house`. The whole-house price is deliberately less than the two
added together; the build check confirms that on every row.

The contact form asks which apartment, refuses more than four guests for a
single floor, and the unit pages link to `/contact?unit=upper` so nobody has
to pick twice.

### Adding a third apartment

Add an entry to `units`, a `house` price to each rate row (or leave it), a
block under `units` in each of `hr.js`, `en.js` and `de.js`, plus its
`captions`, `gallery.groups` and `contact.unitOptions` entries. The routes,
cards, gallery grouping and nav all come from the array. `HousePlan.jsx` is
the one place that assumes exactly two floors.

## Languages

Croatian is the default. English and German are offered next to it, in that
order, from the HR / EN / DE switcher in the top bar.

A visitor's choice is remembered in their browser, so a returning guest lands
in the language they used last time. On a first visit the site checks their
browser language and falls back to Croatian if it is not one of the three.
`<html lang>`, the page title, and the meta description all follow the choice.

### Where the words are

| File | Holds |
| --- | --- |
| `src/data/shared.js` | Everything that is *not* language: coordinates, email, phone, units, photo file names, prices, routes |
| `src/data/hr.js` | All Croatian text |
| `src/data/en.js` | All English text |
| `src/data/de.js` | All German text |
| `src/i18n.jsx` | Detection, storage, and the `useLang()` hook |

The three language files have exactly the same shape, so you can open two side
by side in VS Code and work down them line for line.

Change a price once, in `shared.js`, and it updates on all three versions —
prices can't drift between languages. Season names and minimum-stay wording
*are* translated, keyed by the same row id (`early`, `june`, `peak`, `late`,
`autumn`). Same idea for photos: the file name is set once in `shared.js`, the
caption three times. Because both apartments have the same layout, the room list is written once
per language as the top-level `rooms` array. Each floor then carries a
`roomNotes` object for what differs — the bathrooms — so the identical rooms
can never drift apart.

### Adding a fourth language

1. Copy `src/data/en.js` to, say, `src/data/it.js` and translate the values.
2. In `src/i18n.jsx`, import it and add one line to `LOCALES`:

```js
{ code: 'it', short: 'IT', name: 'Italiano', content: it },
```

That's the whole job — the switcher, detection, and every page pick it up.

### One trade-off

All three languages share the same URLs. That keeps the site truly static, but
search engines only index one version, and a guest can't send a friend a link
that opens in German. For a single apartment booked by email that is usually
fine. If you later want `/de/apartment` style URLs you would need per-language
routes and a `hreflang` tag per page — a bigger change, worth doing only if
search traffic starts to matter.

## Changing other content

Names, coordinates, prices, photo file names and contact details are in
`src/data/shared.js`. Everything with words in it is in the three language
files. The pages read from both, so you never have to touch JSX to change
wording.

## Photos

The photographs live in `public/photos/` and are listed once in the `plates`
array in `src/data/shared.js`:

```js
{ id: 3, src: 'photos/soba_1_gornji_kat.jpeg', group: 'upper' },
```

`group` is `upper`, `lower` or `house` (exterior and shared). It decides which
unit page a photo appears on and which section of the gallery it lands in.

The caption for plate 3 is `captions[3]` in each of `hr.js`, `en.js` and
`de.js` — the file name once, the caption three times.

**Cropping.** A photo with no `ratio` is shown at its own shape, so nothing is
cut off. Add `ratio: 'wide'` (3:2), `'square'` (1:1) or `'tall'` (3:4) to crop
that photo into a fixed frame if you would rather the grid lined up. The three
photos on the home page are set by `featuredPlateIds` and are always cropped
to 3:2 so the row is even. Slots with no photo yet (`src: null`) draw an
engraved placeholder and always need a ratio.

Aim for JPEGs about 1600 px on the long edge and under 400 KB each.

## The contact form

There is no server, so the form composes the enquiry and opens it in the
visitor's own mail app. Nothing is sent or stored until they press send.

The subject line and the field labels inside that email follow whichever
language the visitor is using, so a German enquiry arrives with German labels.

If you want the form to submit directly, sign up for a free form service
(Formspree, Basin, Netlify Forms) and replace the `handleSubmit` function in
`src/pages/Contact.jsx` with a `fetch` to the endpoint they give you. Nothing
else has to change.

## Design notes

The palette and structure come from a hydrographic sea chart, not from a
generic booking template:

- **Colour.** Deep ink `#0B2545` for open water, `#17415E` for the shelf,
  warm chart paper `#F2EDE1` for land, and oleander pink `#D95A86` as the
  single accent. Tokens live in `src/styles/tokens.css`.
- **Bands.** Sections alternate between `band--deep` (below the waterline) and
  `band--paper` (above it). All vertical rhythm belongs to `.band`, so no two
  rules ever fight over section padding.
- **Type.** Bodoni Moda for display — the letterform engraved on old chart
  cartouches — and Archivo for everything else. Depth figures and prices are
  set in Bodoni italic, the way soundings are printed on charts.
- **Signature.** `src/components/SeaChart.jsx` draws the Karin Sea behind the
  hero: the almost closed bay, the narrow Karinsko ždrilo channel at the
  north-west, isobaths at 2, 5, 8 and 11 m, scattered depth soundings, and a
  marker where the house stands. The depths are real — the bay is 11 m at its
  deepest. It draws itself in on load and then breathes on a 19-second cycle.
  Both stop under `prefers-reduced-motion`.
- **Distances instead of numbers.** The "From the front door" list uses real
  measured distances rather than decorative `01 / 02 / 03` markers. The only
  numbered list on the site is the travel route, where the order is the point.

## Hosting

`npm run build` produces a `dist/` folder of static files. Upload it to
Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any shared host.

**Where the site lives** is set by `base` in `vite.config.js`. It ships as
`'/'`, which is right when the site is the whole domain. Putting it in a
subfolder instead? Set `base: '/that-folder/'`, with slashes at both ends, and
everything follows — including the photos, because `photoUrl()` in
`src/data/shared.js` builds their URLs from the same value.

Do not set `base` to `'./'`. Relative paths resolve against whatever page the
visitor is on, so a photo would load on `/gallery` and 404 one level deeper on
`/apartments/upper`, and the JS and CSS would fail on a hard refresh there.

Because the site uses real URLs, the server also has to send unknown paths
back to `index.html`, or a refresh on `/gallery` will 404:

- **Netlify** — already handled; `public/_redirects` is included.
- **Vercel** — add a `vercel.json` with a rewrite of `/(.*)` to `/index.html`.
- **Apache** — add an `.htaccess` with `FallbackResource /index.html`.
- **Anything else** — swap `BrowserRouter` for `HashRouter` in
  `src/main.jsx`. URLs become `/#/gallery`, and it works everywhere with no
  server configuration at all.

## Before you go live

- Replace the placeholder `email`, `phone` and `registrationId` in
  `src/data/shared.js`, and check the postal address. Croatian rentals must
  display the real registration number.
- Check the rates in `shared.js` — three prices per season now — and the
  season wording in all three language files.
- Confirm the real areas, bed sizes and floor labels in `units` and in each
  language file. The current ones are plausible, not measured.
- Read the Croatian text out loud once. It was written to sound like a person,
  not a listing, and it should sound like *you*.
- Add a `favicon.ico` to `public/`.
