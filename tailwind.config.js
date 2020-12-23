module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['mitr', 'Arial', 'sans-serif'],
      'halftime': ['tlhalftimeregular', 'Arial', 'sans-serif'],
      'fulltime': ['tlfulltimeregular', 'Arial', 'sans-serif'],
      'headline': ['tl45headlines', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
    },
  },
  plugins: [],
}
