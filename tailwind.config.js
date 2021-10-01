module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        grey: "var(--grey)",
        lightGrey: "var(--lightGrey)",
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
