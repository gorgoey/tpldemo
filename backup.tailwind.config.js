const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      // sm: '480px',
      md: '768px',
      lg: '960px',
      xl: '1280px',
    },
    colors: {
      primary: {
        dark: 'orange',
        DEFAULT: 'red',
        light: 'pink',
      },
      orange: colors.orange,
      white: colors.white,
      black: colors.black,
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
    },
    spacing: {
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '20px',
      '6': '24px',
      '7': '28px',
      '8': '32px',
      '9': '36px',
      '10': '40px',
      '11': '44px',
      '12': '48px',
    },
    fontFamily: {
      heading: ['sukhumvit', 'sans-serif'],
    },
    zIndex: {
      auto: 'auto',
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
    },
  },
}
