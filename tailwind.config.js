/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      black: '#222222',
      red: '#FF5964',
      blackSec: '#282828',
      green: '#65B891',
      white: '#FFFCF9',
      blackWithOpacity: '#28282840'
    },
    fontFamily: {
      mono: ['Spline Sans Mono', 'monospace']
    },
    extend: {},
  },
  plugins: [],
}

