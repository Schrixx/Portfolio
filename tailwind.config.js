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
        lighterHyundai: "#FAC973",
        hyundaiYellow: "#ECA72C",
        whiteSmoke: "#F2F2F2",
        bittersweet: "#F05D5E",
        lighterBittersweet: "#FE9091",
        darkerBittersweet: "#DF4445",
        caribbeanCurrent: "#0F7173",
      },
      rotate: {
        '270': '270deg',
      }
    },
  },
  plugins: [],
}