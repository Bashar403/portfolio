/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.html', './src/**/*.js' ],
  theme: {
    extend: {
      fontFamily: {
        'hanken': ['Hanken Grotesk', 'sans-serif'], // Define Hanken Grotesk
      },
    },
  },
  plugins: [],
}
