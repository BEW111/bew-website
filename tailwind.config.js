/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "4px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        luthonSouthardScript: ["Luthon Southard Script", "script"],
        luthonSouthardSerif: ["Luthon Southard Serif", "serif"],
        robotoRegular: ["Roboto Regular", "sans-serif"],
        robotoMedium: ["Roboto Medium", "sans-serif"],
        robotoLight: ["Roboto Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
