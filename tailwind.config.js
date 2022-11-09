/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Raleway', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'app': {
          'bg': {
            main: '#3A3A3A',
            secondary: '#212121'
          },
          'text': {
            main: '#7D33FF',
            hover: '#6521db',
            secondary: '#212121',
            light: '#AAAAAA'
          }
        }
      },
      dropShadow: {
        'title': '1px 3px 0 rgb(25, 25, 25)'
      }
    },
  },
  plugins: [],
}
