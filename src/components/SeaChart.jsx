/* ==========================================================================
   SeaChart
   --------------------------------------------------------------------------
   The signature element: the Karin Sea drawn the way a hydrographic chart
   draws it. An almost closed bay, reached through the narrow Karinsko ždrilo
   at the north-west, with isobaths at 2, 5, 8 and 11 metres — the whole bay
   really is that shallow, and the 10 m line really does run close to shore.
   Depth soundings are the small italic figures charts print.

   The contours draw themselves in on load, then breathe very slowly. Both
   stop under prefers-reduced-motion (see the CSS).
   ========================================================================== */

/* Water: the basin plus the channel, as one closed shape. Land is the frame
   with this punched out of it, so the coastline is a single unbroken line. */
const WATER =
  'M 108 96 C 240 200 330 268 400 322 C 424 430 476 508 578 562 C 692 622 866 612 966 542 C 1058 476 1078 356 1014 260 C 952 168 788 136 656 158 C 556 176 476 224 438 288 C 396 236 286 152 140 62 Z'

/* Each isobath is a closed contour inside the basin. `len` is roughly the
   path's own length, so the draw-in animation finishes when the line does. */
const ISOBATHS = [
  {
    d: 'M 470 340 C 490 440 540 506 630 550 C 730 598 872 588 954 524 C 1032 464 1046 360 992 280 C 938 202 796 176 680 196 C 574 214 492 262 470 340 Z',
    len: 1600,
    delay: 0.35,
  },
  {
    d: 'M 540 350 C 558 432 602 486 678 522 C 762 560 878 550 944 496 C 1008 444 1018 360 974 296 C 928 232 812 212 716 228 C 628 244 558 284 540 350 Z',
    len: 1320,
    delay: 0.6,
  },
  {
    d: 'M 610 358 C 626 420 660 462 720 490 C 786 520 874 512 924 470 C 972 430 980 366 946 318 C 910 268 822 254 750 266 C 682 278 626 306 610 358 Z',
    len: 1020,
    delay: 0.85,
    deep: true,
  },
  {
    d: 'M 690 372 C 700 414 726 444 770 460 C 818 478 872 470 904 440 C 934 412 938 372 916 342 C 892 310 836 300 788 308 C 742 316 700 336 690 372 Z',
    len: 690,
    delay: 1.1,
    deep: true,
  },
]

/* Depth readings in metres, placed between the contours. Nothing here is
   deeper than 11, because nothing in this bay is. */
const SOUNDINGS = [
  [252, 232, '2'],
  [455, 250, '3'],
  [620, 186, '2'],
  [820, 168, '3'],
  [980, 226, '2'],
  [1042, 388, '4'],
  [930, 570, '3'],
  [700, 600, '2'],
  [498, 500, '3'],
  [432, 372, '4'],
  [560, 300, '6'],
  [900, 244, '5'],
  [1010, 468, '6'],
  [770, 556, '5'],
  [596, 468, '7'],
  [660, 244, '8'],
  [960, 350, '9'],
  [846, 506, '8'],
  [800, 390, '11'],
]

export default function SeaChart({ label = 'Here' }) {
  return (
    <svg
      className="hero__chart"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      {/* Land: the whole frame with the water punched out of it. */}
      <path
        className="chart__land"
        fillRule="evenodd"
        d={`M 0 0 H 1200 V 700 H 0 Z ${WATER}`}
      />
      <path
        className="chart__coast chart__draw"
        d={WATER}
        style={{ strokeDasharray: 2700, strokeDashoffset: 2700 }}
      />

      <g className="chart__swell">
        {ISOBATHS.map((line) => (
          <path
            key={line.d}
            className={
              'chart__isobath chart__draw' +
              (line.deep ? ' chart__isobath--deep' : '')
            }
            d={line.d}
            style={{
              strokeDasharray: line.len,
              strokeDashoffset: line.len,
              animationDelay: `${line.delay}s`,
            }}
          />
        ))}
      </g>

      <g className="chart__soundings">
        {SOUNDINGS.map(([x, y, value]) => (
          <text key={`${x}-${y}`} x={x} y={y} textAnchor="middle">
            {value}
          </text>
        ))}
      </g>

      {/* The house, marked the way a landmark is marked on a chart. */}
      <g className="chart__marker">
        <line className="chart__marker-leader" x1="862" y1="128" x2="862" y2="78" />
        <line className="chart__marker-leader" x1="862" y1="78" x2="960" y2="78" />
        <circle className="chart__marker-ring" cx="862" cy="128" r="9" />
        <circle className="chart__marker-dot" cx="862" cy="128" r="2.5" />
        <text className="chart__marker-text" x="970" y="82">
          {label}
        </text>
      </g>
    </svg>
  )
}
