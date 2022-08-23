const {fontFamily} = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')
const TailwindcssForms = require('@tailwindcss/forms')

const {mono: defaultFontFamily} = defaultTheme.fontFamily

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '1440px',
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#fff',
      red: {
        DEFAULT: '#EC5757',
        light: '#FF9797',
      },
      purple: {
        DEFAULT: '#7C5DFA',
        light: '#9277FF', // purple-light
      },
      gray: {
        800: '#1E2139',
        700: '#141625',
        600: '#0C0E16',
        500: '#252945',
        400: '#7E88C3',
        300: '#888EB0',
        200: '#DFE3FA',
        100: '#F8F8FB',
      },
    },
    fontSize: {
      'body-1': ['12px', {lineHeight: '15px', letterSpacing: '-0.25px'}],
      'body-2': ['11px', {lineHeight: '18px', letterSpacing: '-0.23px'}],
      xs: [
        '12px',
        {
          lineHeight: '15px',
          letterSpacing: '-0.25px',
        },
      ],
      base: [
        '16px',
        {
          lineHeight: '24px',
          letterSpacing: '-0.8px',
        },
      ],
      lg: ['20px', {lineHeight: '22px', letterSpacing: '-0.63px'}],
      xl: ['32px', {lineHeight: '36px', letterSpacing: '-1px'}],
    },
    extend: {},
  },
  plugins: [TailwindcssForms],
}
