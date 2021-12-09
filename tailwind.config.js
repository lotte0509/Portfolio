const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: [
    '*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        darkBlue: '#045676',
        lightBlue: '#028090',
        green: '#00a896',
        salmon: '#e4af8b',
        cream: '#f9f0e0'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
// npx tailwindcss build style.css -o output.css