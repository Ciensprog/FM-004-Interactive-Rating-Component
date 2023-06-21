// const { fontFamily } = require('tailwindcss/defaultTheme')

const colors = {
  //
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: colors,
      borderColor: colors,
      colors,
      // fontFamily: {
      //   montserrat: ['Montserrat', ...fontFamily.sans],
      // },
      minHeight: {
        screen: '100vh',
      },
    },
  },
  plugins: [],
}
