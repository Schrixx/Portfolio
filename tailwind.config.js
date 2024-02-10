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
        slightLighterRaisingBlack: "#3F393F",
        lighterRaisinBlack: "#373137",
        evenLighterRaisinBlack: "#a194a1",
        lighterHyundai: "#FAC973",
        hyundaiYellow: "#ECA72C",
        whiteSmoke: "#F2F2F2",
        bittersweet: "#F05D5E",
        lighterBittersweet: "#FE9091",
        darkerBittersweet: "#DF4445",
        caribbeanCurrent: "#0F7173",
        darkerCaribbeanCurrent: "#074142",
      },
      rotate: {
        '270': '270deg',
      },
      screens: {
        'xs': '373px',
        'portfolioScreen': '1152px',
        'aboutScreen': '1117px',
      },
      boxShadow: {
        'hard': '10px 10px',
        'negHard': '-10px -10px',
        'negHard2': '-10px 10px',
      }
    },
  },
  plugins: [],
}