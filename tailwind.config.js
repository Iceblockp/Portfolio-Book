/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily:{
      'sans':['Nunito','sans-serif'],

    },
    extend: {
      fontFamily:{
        'heading':['Roboto',"sans-serif"],

      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
      },
    },
  },
  plugins: [],
}

