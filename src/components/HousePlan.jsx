/* ==========================================================================
   HousePlan
   --------------------------------------------------------------------------
   A schematic of the house, drawn from the owner's floor plan. Both floors
   are identical, so both blocks are drawn from the same measurements:

     rooms 1 and 2 down the left; the bathroom a narrow slot beside them,
     with the small hallway tucked underneath it; the kitchen filling the
     rest of the upper half; the living room across the bottom; and the big
     terrace running the full height on the right.

   One floor's bathroom reaches further: it takes a small alcove out of the
   corner of room 1 and puts the walk-in shower in it. That is the only
   difference between the two apartments, and it is drawn when the floor's
   `showerAlcove` flag is set in shared.js.

   You come in off the terrace straight into the kitchen — that is the door
   drawn in the terrace wall — and reach the bathroom and the rooms through
   the little hallway behind it.

   The external staircase and the outside shower sit in the band between the
   floors, which is where they are in the house.

   Not a drawing of the building — a drawing of how it is divided, which is
   the first thing a guest needs to understand. Each floor links to its page.
   ========================================================================== */

import { useNavigate } from 'react-router-dom'
import { findUnit, unitPath } from '../data/shared.js'
import { useLang } from '../i18n.jsx'

/* Geometry. Every measurement of one floor lives here, so the plan can be
   reshaped by changing numbers rather than by redrawing paths. */
const X0 = 20 // outer wall, left
const COL = 110 // rooms 1 and 2 column ends
const BATH = 148 // bathroom and hallway end; kitchen begins
const INNER = 280 // inside of the building ends, terrace begins
const X1 = 380 // outer edge, right

const H = 150 // floor height
const BATH_H = 56 // bathroom depth; the hallway sits below it
const MID = 80 // bottom of the kitchen, hallway and room 1

/* The door off the terrace, measured down from the top of the floor. */
const DOOR_TOP = 52
const DOOR_H = 24

/* The shower alcove, bitten out of the top corner of room 1. */
const ALC_W = 34
const ALC_H = 30

const UPPER_Y = 50
const BAND_Y = 216 // stairs + outside shower
const BAND_H = 36
const LOWER_Y = 276

function Floor({ name, y, active, onOpen, labels, alcove = false }) {
  const alcX = COL - ALC_W
  return (
    <g
      className={active ? 'plan__floor is-active' : 'plan__floor'}
      role="link"
      tabIndex={0}
      aria-label={name}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onOpen()
        }
      }}
    >
      <text className="plan__name" x={X0} y={y - 12}>
        {name}
      </text>

      {/* Shell */}
      <rect className="plan__fill" x={X0} y={y} width={X1 - X0} height={H} />
      <rect className="plan__wall" x={X0} y={y} width={X1 - X0} height={H} />

      {/* Internal walls. Where the bathroom takes its alcove, the wall
          between it and room 1 starts lower down — the alcove is open to
          the bathroom, because it is part of it. */}
      <line
        className="plan__div"
        x1={COL}
        y1={y + (alcove ? ALC_H : 0)}
        x2={COL}
        y2={y + H}
      />
      {alcove && (
        <>
          <line className="plan__div" x1={alcX} y1={y} x2={alcX} y2={y + ALC_H} />
          <line className="plan__div" x1={alcX} y1={y + ALC_H} x2={COL} y2={y + ALC_H} />
          <text
            className="plan__room plan__room--micro"
            x={alcX + ALC_W / 2}
            y={y + ALC_H / 2 + 3}
            textAnchor="middle"
          >
            {labels.shower}
          </text>
        </>
      )}
      <line className="plan__div" x1={BATH} y1={y} x2={BATH} y2={y + MID} />
      <line className="plan__div" x1={X0} y1={y + MID} x2={INNER} y2={y + MID} />
      <line className="plan__div" x1={COL} y1={y + BATH_H} x2={BATH} y2={y + BATH_H} />

      {/* The terrace wall, broken by the door you come in through */}
      <line className="plan__div" x1={INNER} y1={y} x2={INNER} y2={y + DOOR_TOP} />
      <line className="plan__div" x1={INNER} y1={y + DOOR_TOP + DOOR_H} x2={INNER} y2={y + H} />
      <line
        className="plan__div"
        x1={INNER}
        y1={y + DOOR_TOP}
        x2={INNER - DOOR_H}
        y2={y + DOOR_TOP}
      />
      <path
        className="plan__div"
        d={`M ${INNER - DOOR_H} ${y + DOOR_TOP} A ${DOOR_H} ${DOOR_H} 0 0 1 ${INNER} ${
          y + DOOR_TOP + DOOR_H
        }`}
      />

      {/* Rooms */}
      <text
        className="plan__room"
        x={alcove ? (X0 + alcX) / 2 : (X0 + COL) / 2}
        y={y + MID / 2 + 4}
        textAnchor="middle"
      >
        {labels.room1}
      </text>
      <text className="plan__room" x={(X0 + COL) / 2} y={y + (MID + H) / 2 + 4} textAnchor="middle">
        {labels.room2}
      </text>
      <text className="plan__room" x={(BATH + INNER) / 2} y={y + MID / 2 + 4} textAnchor="middle">
        {labels.kitchen}
      </text>
      <text className="plan__room" x={(COL + INNER) / 2} y={y + (MID + H) / 2 + 4} textAnchor="middle">
        {labels.living}
      </text>

      {/* The bathroom is a narrow slot, so its label turns, as on the sketch */}
      <text
        className="plan__room plan__room--tight"
        textAnchor="middle"
        transform={`translate(${(COL + BATH) / 2} ${y + BATH_H / 2}) rotate(-90)`}
      >
        {labels.bathroom}
      </text>

      {/* The hallway is barely a room — a square behind the kitchen door */}
      <text
        className="plan__room plan__room--micro"
        x={(COL + BATH) / 2}
        y={y + (BATH_H + MID) / 2 + 3}
        textAnchor="middle"
      >
        {labels.hallway}
      </text>

      {/* The terrace: hatched and dashed, because it is open to the sky */}
      <rect className="plan__hatch" x={INNER} y={y} width={X1 - INNER} height={H} />
      <rect className="plan__outdoor" x={INNER} y={y} width={X1 - INNER} height={H} />
      <rect className="plan__fill" x={INNER} y={y} width={X1 - INNER} height={H} />
      <text
        className="plan__room"
        textAnchor="middle"
        transform={`translate(${(INNER + X1) / 2} ${y + H / 2}) rotate(-90)`}
      >
        {labels.terrace}
      </text>

      {/* Which way you walk in */}
      <g className="plan__entry">
        <line
          x1={INNER + 38}
          y1={y + DOOR_TOP + DOOR_H / 2}
          x2={INNER + 8}
          y2={y + DOOR_TOP + DOOR_H / 2}
        />
        <path
          d={`M ${INNER + 16} ${y + DOOR_TOP + DOOR_H / 2 - 5} L ${INNER + 8} ${
            y + DOOR_TOP + DOOR_H / 2
          } L ${INNER + 16} ${y + DOOR_TOP + DOOR_H / 2 + 5}`}
        />
      </g>
    </g>
  )
}

export default function HousePlan({ activeUnit = null }) {
  const navigate = useNavigate()
  const { t } = useLang()
  const labels = t.plan

  return (
    <svg className="plan" viewBox="0 0 400 470" role="img" aria-label={labels.title}>
      <defs>
        <pattern
          id="plan-hatch"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line className="plan__hatch-line" x1="0" y1="0" x2="0" y2="8" />
        </pattern>
      </defs>

      <Floor
        name={t.units.upper.name}
        y={UPPER_Y}
        active={activeUnit === 'upper'}
        onOpen={() => navigate(unitPath('upper'))}
        labels={labels}
        alcove={findUnit('upper')?.showerAlcove}
      />

      {/* Between the floors: the staircase up, and the outside shower beside it */}
      <g className="plan__band">
        <rect
          className="plan__outdoor"
          x={X0}
          y={BAND_Y}
          width={INNER - X0}
          height={BAND_H}
        />
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <line
            key={i}
            className="plan__div"
            x1={X0 + i * ((INNER - X0) / 7)}
            y1={BAND_Y}
            x2={X0 + i * ((INNER - X0) / 7)}
            y2={BAND_Y + BAND_H}
          />
        ))}
        <text
          className="plan__room plan__room--tight"
          x={(X0 + INNER) / 2}
          y={BAND_Y + BAND_H / 2 + 3}
          textAnchor="middle"
        >
          {labels.stairs}
        </text>

        <rect
          className="plan__hatch"
          x={INNER}
          y={BAND_Y}
          width={X1 - INNER}
          height={BAND_H}
        />
        <rect
          className="plan__outdoor"
          x={INNER}
          y={BAND_Y}
          width={X1 - INNER}
          height={BAND_H}
        />
        <text
          className="plan__room plan__room--tight"
          x={(INNER + X1) / 2}
          y={BAND_Y + BAND_H / 2 + 3}
          textAnchor="middle"
        >
          {labels.outsideShower}
        </text>
      </g>

      <Floor
        name={t.units.lower.name}
        y={LOWER_Y}
        active={activeUnit === 'lower'}
        onOpen={() => navigate(unitPath('lower'))}
        labels={labels}
        alcove={findUnit('lower')?.showerAlcove}
      />

      {/* Ground */}
      <line className="plan__ground" x1="0" y1={LOWER_Y + H} x2="400" y2={LOWER_Y + H} />
    </svg>
  )
}
