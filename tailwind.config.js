/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        texture: "url('/img/hero-background3.jpg')",
      },
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
      body: ["Outfit", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
