/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightText: "#757575",
        borderCol: "#E2E2E2",
        darkText: "#1A1A1A",
        primaryCol: "#03C068",
        textRed: "#C8170D",
        danger: "#f87171"
      },
      fontFamily: {
        sans: ['Avenir Next Cyr', 'sans-serif'], // Replace the default sans-serif
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(88.39deg, #0FE682 -11.84%, #03C068 46.78%, #29F596 96.47%)',
      },
      boxShadow: {
       'custom-combined': `
          -2px 16px 35px 0px rgba(209, 209, 209, 0.1),
          -9px 63px 64px 0px rgba(209, 209, 209, 0.09),
          -21px 143px 87px 0px rgba(209, 209, 209, 0.05),
          -38px 254px 103px 0px rgba(209, 209, 209, 0.03),
          -59px 396px 112px 0px rgba(209, 209, 209, 0.00)
        `,
        'custom-light': '0px 28px 28px 0px #F1F5F9',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        'input:-webkit-autofill': {
          'box-shadow': '0 0 0 1000px white inset !important',
          '-webkit-text-fill-color': 'black !important',
        },
      });
    },
  ],
}