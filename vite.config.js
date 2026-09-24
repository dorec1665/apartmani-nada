import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  /* Where the site will live, as a path from the domain root.
   *
   * "/" is right when the site is the whole domain (apartmani-nada.hr).
   * Hosting it in a subfolder instead? Put the subfolder here, with slashes
   * at both ends — base: '/apartmani/' — and everything, photos included,
   * follows automatically, because src/data/shared.js builds photo URLs from
   * this value.
   *
   * Do not use './'. Relative paths resolve against the current URL, so a
   * photo would load on /gallery and 404 on /apartments/upper, which is one
   * level deeper. The same goes for the JS and CSS on a hard refresh.
   */
  base: '/',
})
