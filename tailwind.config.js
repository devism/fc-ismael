module.exports = {
  purge: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'sans':['Roboto'],
      'space':['Space Grotesk', 'serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
