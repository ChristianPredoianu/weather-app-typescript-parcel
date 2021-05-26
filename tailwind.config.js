module.exports = {
  //https://github.com/tailwindlabs/tailwindcss/issues/3415 It's not possible to purge css yet since Parcel doesn't support postCSS 8 yet
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
