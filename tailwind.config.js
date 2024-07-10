/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      fontFamily: {
       'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
       'quattrocento': ['"Quattrocento"', 'serif'],
       "satisfty": ['"Satisfy"', 'cursive'],
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}