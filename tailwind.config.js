module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // => @media (min-width: 990px)

      scr768: "768px",
      scr990: "990px",
    },
    extend: {},
  },
  plugins: [],
};
