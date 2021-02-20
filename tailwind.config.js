module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      sambuca: '#3C2410',
      'mint-green': '#86F584',
      'test-bg-color': '#876757',
      white: '#ffffff'
    },
    backgroundColor: theme => theme('colors'),
    fontSize: {
      '24p': '24px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
