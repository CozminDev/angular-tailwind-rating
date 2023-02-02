/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    colors: {
      white: "#ffffff",
      lightgray: "#959eac",
      mediumgray: "#7c8798",
      darkblue: "#252d37",
      verydarkblue: "#121417",
      orange: "#fb7413"
    },
    extend: {
      fontFamily: {
        'overpass': ['Overpass', 'sans-serif']
      }
    },
  },
  plugins: [],
}
