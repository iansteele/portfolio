module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'display': ['Abril Fatface', 'cursive'],
      'body': ['Roboto', 'sans-serif'],

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
