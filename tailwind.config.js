/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Rubik']
    },
    extend: {
      colors: {
        'woiblack': '#374151',
        'woigreen': '#03AC0E',

      }
    },
  },
  plugins: [],
};
