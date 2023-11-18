/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/*.js",
    "./src/components/*.jsx",
    "./src/pages/*.jsx"
  ],
  
  theme: {
    extend: {

      borderWidth: {
        "1": "1px"
      },

      colors: {
        "bg": "#161616",
        "dg": "#131313",
        "fgLight": "#1f1f1f",
        "border": "#51515151",
        "lborder": "#81818181",
      }

    },
  },
  
  plugins: [],

}

