/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        raisinBlack: "#232123",
        lighterRaisinBlack: "#373137",
        hyundaiYellow: "#ECA72C",
        whiteSmoke: "#F2F2F2",
      }
    },
  },
  plugins: [],
}