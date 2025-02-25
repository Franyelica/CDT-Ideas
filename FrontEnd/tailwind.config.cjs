/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tittle: ['Bebas Neue', 'cursive'],
        subTittle: ['Montserrat', 'sans-serif'],
        text: ['Quicksand', 'sans-serif'],
      },
      colors: {
        purple: {
          100: '#8d8cbd',
          200: '#4a5691',
          300: '#434b89',
          400: '#2b2d6f',
        },      
      },
    },
  },
  plugins: [],
}
