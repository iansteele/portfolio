module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "200px minmax(900px, 1fr) 100px",
      },
      scale: {
        101: "1.01",
      },
      colors: {
        black: "var(--color-black)",
        white: "var(--color-white)",
        gray: "var(--color-gray)",
        brand: {
          primary: "var(--color-brand-primary)",
          secondary: "var(--color-brand-secondary)",
          tertiary: "var(--color-brand-tertiary)",
          muted: "var(--color-brand-tertiary--muted)",
        },
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
