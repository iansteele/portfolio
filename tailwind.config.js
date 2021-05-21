module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#1a151b',
      white: '#FFF',
      gray: '#8e8e8e',
      brand: {
        primary: '#15161b',
        secondary: '#AF7247',
        tertiary: '#f6f6f6',
      }
    },
    extend: {
      scale: {
        101: '101%',
      }
    },
    fontFamily: {
      'display': ['Roboto', 'serif'],
      'body': ['Roboto', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
