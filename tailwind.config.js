/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        primaryShadow: '0 4px 0 0 #35af00',
        primaryHover: '0 4px 0 0 #239200',
        primaryActive: '0 0 0 0 #239200',
        secondaryActive: '0 2px 0 0 #cbd5e1',
        secondaryActiveDark: '0 2px 0 0 #384a61',
        secondaryShadow: '0 4px 0 0 #cbd5e1',
        secondaryHover: '0 4px 0 0 #94a3b8',
        secondaryShadowDark: '0 4px 0 0 #4a6382',
        secondaryHoverDark: '0 4px 0 0 #384a61',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: 'rgb(243, 252, 229)',
          100: 'rgb(232, 252, 201)',
          200: 'rgb(205, 249, 149)',
          300: 'rgb(166, 239, 95)',
          400: 'rgb(128, 224, 56)',
          500: 'rgb(75, 204, 0)',
          600: 'rgb(53, 175, 0)',
          700: 'rgb(35, 146, 0)',
          800: 'rgb(21, 118, 0)',
          900: 'rgb(11, 97, 0)',
        },
        moon: {
          50: 'rgb(223, 229, 236)',
          100: 'rgb(190, 203, 218)',
          200: 'rgb(158, 176, 199)',
          300: 'rgb(125, 150, 181)',
          400: 'rgb(93, 124, 162)',
          500: 'rgb(74, 99, 130)',
          600: 'rgb(56, 74, 97)',
          700: 'rgb(33, 45, 59)',
          800: 'rgb(27, 35, 45)',
          900: 'rgb(13, 18, 23)',
        },
      },
    },
  },
  plugins: [],
};
