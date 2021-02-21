module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#4dc0b5',
      secondary: '#bf714d',
      tertiary: '#c4c4c4',
      light: '#ffffff',
      dark: '#000000'
    },
    backgroundColor: theme => theme('colors'),
    borderColor: theme => theme('colors'),
    fontFamily: {
      sans: ['ComicSansMS'],
      body: ['ComicSansMS']
    },
    fontSize: {
      title: '36px',
      label: '24px',
      small: '14px'
    },
    fontWeight: {
      regular: 400,
      bold: 700
    },
    spacing: {
      '20px': '20px',
      '40px': '40px',
      '57px': '57px'
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
