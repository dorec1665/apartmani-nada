Put your photographs in this folder.

Then open src/data/site.js, find the `plates` array, and set each `src`
to the file name, like this:

  { id: 1, src: 'photos/terrace.jpg', caption: 'The terrace, late afternoon', ratio: 'wide' },

Any plate left with `src: null` shows an engraved placeholder instead of a
broken image, so you can add photos one at a time.

Recommended: JPEG, about 1600 px on the long edge, under 400 KB each.
