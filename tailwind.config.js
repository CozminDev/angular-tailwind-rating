/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    colors: {
      white: "#ffffff",
      lightgray: "#d6e2f0",
      grayishblue: "#7b879d",
      darkblue: "#1f3251"
    },
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}
