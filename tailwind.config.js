/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#222831",
        hover: "#606C80",
        blueishGray: "#393E46",
        creamYellow: "#FFD369",
        darkenedWhite: "#EEEEEE",
      }
    },
  },
  plugins: [],
}