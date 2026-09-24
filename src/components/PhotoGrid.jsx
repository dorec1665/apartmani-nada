/* ==========================================================================
   PhotoGrid
   --------------------------------------------------------------------------
   A grid of plates where every real photograph opens into the Lightbox, and
   the arrows there step through this grid — not the whole site — so what you
   move between is what you were just looking at.

   Slots with no photo yet are still drawn, but are not clickable.
   ========================================================================== */

import { useState } from 'react'
import Plate from './Plate.jsx'
import Lightbox from './Lightbox.jsx'

export default function PhotoGrid({ plates, className = 'plate-grid' }) {
  const [openAt, setOpenAt] = useState(null)
  const photos = plates.filter((plate) => plate.src)

  return (
    <>
      <div className={className}>
        {plates.map((plate) => (
          <Plate
            key={plate.id}
            plate={plate}
            onOpen={plate.src ? () => setOpenAt(photos.indexOf(plate)) : undefined}
          />
        ))}
      </div>

      {openAt !== null && (
        <Lightbox
          plates={photos}
          index={openAt}
          onIndex={setOpenAt}
          onClose={() => setOpenAt(null)}
        />
      )}
    </>
  )
}