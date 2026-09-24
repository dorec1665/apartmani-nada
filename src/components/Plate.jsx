/* ==========================================================================
   Plate
   --------------------------------------------------------------------------
   A framed image with a caption. When no photo has been supplied yet it draws
   an engraved plate instead, in the style of the illustrations in an old
   sailing pilot. That way the page looks finished before your photos arrive,
   and slotting them in later changes nothing else.

   The photo file lives in shared.js (one setting for all languages); the
   caption comes from the active language file.
   ========================================================================== */

import { photoRatio, photoUrl } from '../data/shared.js'
import { useLang } from '../i18n.jsx'

/* A photo with no `ratio` of its own is cropped to `photoRatio` from
   shared.js, so every photo on the site is the same shape and the grids line
   up. Give one plate a ratio to break it out of that.

   The three frame shapes the placeholders use. The line art is drawn once on a
   300 x 200 canvas and then scaled and centred into whichever box it lands
   in, so nothing is letterboxed or stretched. */
const BOX = {
  wide: [300, 200],
  square: [250, 250],
  tall: [220, 293],
}

const ART_W = 300
const ART_H = 200

/* Three drawings, picked by plate number so no two neighbours match. */
function art(variant) {
  if (variant === 0) {
    // Horizon with an island and a low sun.
    return (
      <>
        <line className="plate__stroke" x1="16" y1="126" x2="284" y2="126" />
        <path
          className="plate__stroke"
          d="M 96 126 C 120 92 148 84 176 104 C 192 114 200 122 214 126"
        />
        <path className="plate__stroke" d="M 200 126 C 214 112 230 108 246 126" />
        <circle className="plate__stroke" cx="70" cy="80" r="13" />
        <line className="plate__stroke" x1="26" y1="150" x2="274" y2="150" />
        <line className="plate__stroke" x1="48" y1="170" x2="252" y2="170" />
      </>
    )
  }
  if (variant === 1) {
    // A stone arch, the shape of the old doorways around here.
    return (
      <>
        <path
          className="plate__stroke"
          d="M 112 186 L 112 96 A 38 38 0 0 1 188 96 L 188 186"
        />
        <path
          className="plate__stroke"
          d="M 126 186 L 126 100 A 24 24 0 0 1 174 100 L 174 186"
        />
        <line className="plate__stroke" x1="20" y1="186" x2="280" y2="186" />
        <line className="plate__stroke" x1="150" y1="124" x2="150" y2="186" />
      </>
    )
  }
  // Pergola beams over the terrace, seen from below.
  return (
    <>
      <line className="plate__stroke" x1="10" y1="34" x2="290" y2="20" />
      <line className="plate__stroke" x1="10" y1="176" x2="290" y2="190" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <line
          key={i}
          className="plate__stroke"
          x1={22 + i * 43}
          y1={33 - i * 2}
          x2={22 + i * 43}
          y2={177 + i * 2}
        />
      ))}
    </>
  )
}

function Engraving({ variant, ratio, hint }) {
  const [w, h] = BOX[ratio] ?? BOX.wide

  // Fit the art inside the frame, leaving room for the caption line on top.
  const top = 48
  const inset = 26
  const scale = Math.min((w - inset * 2) / ART_W, (h - top - inset) / ART_H)
  const x = (w - ART_W * scale) / 2
  const y = top + (h - top - inset - ART_H * scale) / 2

  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="presentation" focusable="false">
      {/* Double hairline frame, as on an engraved plate */}
      <rect className="plate__stroke" x="9" y="9" width={w - 18} height={h - 18} />
      <rect
        className="plate__stroke"
        x="14"
        y="14"
        width={w - 28}
        height={h - 28}
      />

      <text className="plate__hint" x={w / 2} y="32" textAnchor="middle">
        {hint}
      </text>

      <g transform={`translate(${x} ${y}) scale(${scale})`}>{art(variant)}</g>
    </svg>
  )
}

export default function Plate({ plate, onOpen }) {
  const { t } = useLang()
  const { id, src, ratio } = plate
  const caption = t.captions[id] ?? ''
  const number = String(id).padStart(2, '0')

  // A named ratio uses one of the fixed frames; otherwise photos take the
  // shared crop, and a placeholder falls back to a landscape frame.
  const shape = ratio ?? (src ? null : 'wide')

  // A photo that can be opened is a button; anything else is a plain frame.
  const Frame = onOpen ? 'button' : 'div'

  return (
    <figure className={`plate${shape ? ` plate--${shape}` : ''}`}>
      <Frame
        className="plate__frame"
        style={shape ? undefined : { aspectRatio: photoRatio }}
        {...(onOpen ? { type: 'button', onClick: onOpen } : {})}
      >
        {src ? (
          <img src={photoUrl(src)} alt={caption} loading="lazy" />
        ) : (
          <Engraving variant={id % 3} ratio={shape ?? 'wide'} hint={t.ui.plateHint} />
        )}
      </Frame>
      <figcaption className="plate__caption">
        <span className="plate__no">{number}</span>
        <span>{caption}</span>
      </figcaption>
    </figure>
  )
}