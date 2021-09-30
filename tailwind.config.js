module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#55C287",
        grey: "#3E4340",
        lightGrey: "#808080",
      },
      borderRadius: {
        DEFAULT: "100px",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
