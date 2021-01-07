module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './layout/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['mitr', 'Arial', 'sans-serif'],
      halftime: ['tlhalftimeregular', 'Arial', 'sans-serif'],
      fulltime: ['tlfulltimeregular', 'Arial', 'sans-serif'],
      headline: ['tl45headlines', 'Arial', 'sans-serif'],
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      '8rem': '8rem',
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
