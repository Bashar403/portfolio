module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './*.html' // Add this line to include HTML files in the root directory
  ],
  theme: {
    extend: {
      fontFamily: {
        'hanken': ['Hanken Grotesk', 'sans-serif'], // Define Hanken Grotesk
      },
    },
  },
  plugins: [],
}
