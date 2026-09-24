/* ==========================================================================
   Lightbox
   --------------------------------------------------------------------------
   The full-size view a photo opens into. Move through the set with the arrow
   buttons, the left and right arrow keys, or a swipe; leave with Escape, the
   close button, or a click on the dark around the picture.
   ========================================================================== */

import { useCallback, useEffect, useRef } from 'react'
import { photoUrl } from '../data/shared.js'
import { useLang } from '../i18n.jsx'

const SWIPE = 45 // px before a drag counts as a swipe

function Chevron({ back = false }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <path
        d={back ? 'M 15 4 L 7 12 L 15 20' : 'M 9 4 L 17 12 L 9 20'}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Lightbox({ plates, index, onIndex, onClose }) {
  const { t } = useLang()
  const closeRef = useRef(null)
  const touchStart = useRef(null)

  const count = plates.length
  const plate = plates[index]

  const go = useCallback(
    (step) => onIndex((index + step + count) % count),
    [index, count, onIndex]
  )

  // Keyboard
  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape') onClose()
      else if (event.key === 'ArrowLeft') go(-1)
      else if (event.key === 'ArrowRight') go(1)
      else return
      event.preventDefault()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [go, onClose])

  // Stop the page behind from scrolling while this is open
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  // Take focus, and hand it back to whatever opened this on the way out
  useEffect(() => {
    const opener = document.activeElement
    closeRef.current?.focus()
    return () => {
      if (opener instanceof HTMLElement) opener.focus()
    }
  }, [])

  // Fetch the neighbours so stepping through does not flash
  useEffect(() => {
    for (const step of [-1, 1]) {
      const neighbour = plates[(index + step + count) % count]
      if (neighbour?.src) {
        const img = new Image()
        img.src = photoUrl(neighbour.src)
      }
    }
  }, [index, plates, count])

  if (!plate) return null

  const caption = t.captions[plate.id] ?? ''
  const many = count > 1

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={caption}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      onTouchStart={(event) => {
        touchStart.current = event.changedTouches[0].clientX
      }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return
        const dx = event.changedTouches[0].clientX - touchStart.current
        touchStart.current = null
        if (many && Math.abs(dx) > SWIPE) go(dx < 0 ? 1 : -1)
      }}
    >
      <button
        ref={closeRef}
        type="button"
        className="lightbox__btn lightbox__btn--close"
        onClick={onClose}
        aria-label={t.ui.close}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
          <path
            d="M 6 6 L 18 18 M 18 6 L 6 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {many && (
        <button
          type="button"
          className="lightbox__btn lightbox__btn--prev"
          onClick={() => go(-1)}
          aria-label={t.ui.previousPhoto}
        >
          <Chevron back />
        </button>
      )}

      <figure className="lightbox__figure" onClick={(event) => event.stopPropagation()}>
        <img className="lightbox__img" src={photoUrl(plate.src)} alt={caption} />
        <figcaption className="lightbox__caption">
          <span className="lightbox__no sounding">
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>
          <span>{caption}</span>
        </figcaption>
      </figure>

      {many && (
        <button
          type="button"
          className="lightbox__btn lightbox__btn--next"
          onClick={() => go(1)}
          aria-label={t.ui.nextPhoto}
        >
          <Chevron />
        </button>
      )}
    </div>
  )
}