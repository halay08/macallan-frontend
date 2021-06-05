// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        light: '##F9DC06',
        DEFAULT: '#ECC200',
        dark: '#CC8A1C'
      },
      secondary: {
        light: '#252525',
        DEFAULT: '#0E0E0E',
        dark: '#000000'
      }
    },
    fontFamily: {
      primary: ['Helvetica', 'Arial', 'sans-serif'],
      secondary: ['Helvetica', 'Arial', 'sans-serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
