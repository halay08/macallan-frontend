// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      primary: {
        light: '##F9DC06',
        DEFAULT: '#ECC200',
        dark: '#CC8A1C'
      },
      secondary: {
        light: '#252525',
        DEFAULT: '#0E0E0E',
        dark: '#000000'
      },
      gray: {
        light: colors.gray[300],
        DEFAULT: colors.gray,
        dark: colors.gray[600]
      }
    },
    fill: {
      primary: {
        light: '##F9DC06',
        DEFAULT: '#ECC200',
        dark: '#CC8A1C'
      },
      secondary: {
        light: '#252525',
        DEFAULT: '#0E0E0E',
        dark: '#000000'
      },
      gray: {
        light: colors.gray[300],
        DEFAULT: colors.gray,
        dark: colors.gray[600]
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px'
    },
    minHeight: {
      content: 'calc(100vh - 162px)'
    },
    fontFamily: {
      primary: [
        'AGaramondPro-Regular',
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif'
      ],
      'primary-bold': [
        'AGaramondPro-Bold',
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif'
      ],
      secondary: ['Helvetica', 'Arial', 'sans-serif'],
      sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('tailwind-scrollbar')]
};
