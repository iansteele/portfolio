module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: "#1a151b",
      white: "#f5f0e5",
      gray: "#5dadb3",
      brand: {
        primary: "#262628",
        // primary: '#1a151a',
        // primary-blueish: '#131e1f',
        // goldish secondary: "#e8a440",
        secondary: "#55FFA7",
        // secondary: '#AF7247',
        tertiary: "#f6f6f6",
      },
    },
    extend: {
      gridTemplateRows: {
        layout: "200px minmax(900px, 1fr) 100px",
      },
      scale: {
        101: "1.01",
      },
    },
    fontFamily: {
      display: ["Outfit", "serif"],
      body: ["Outfit", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
