const colors = {
  base: '#131518',
  blue: {
    dark: '#262E38',
  },
  grey: {
    light: '#969FAD',
    medium: '#7C8798',
  },
  orange: {
    normal: '#FC7614',
  },
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: colors,
      borderColor: colors,
      colors,
      minHeight: {
        screen: '100vh',
      },
    },
  },
  plugins: [],
}
