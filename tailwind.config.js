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
      },
    },
    extend: {
      scale: {
        '0': '0',
        '25': '.25',
        '50': '.5',
        '75': '.75',
        '90': '.9',
        '95': '.95',
        '100': '1',
        '105': '1.05',
        '110': '1.1',
        '125': '1.25',
        '150': '1.5',
        '200': '2',
        '101': '1.01',
      }
    },
    fontFamily: {
      'display': ['Roboto', 'serif'],
      'body': ['Roboto', 'sans-serif'],
    },
    scale: {
      '101': '101',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
