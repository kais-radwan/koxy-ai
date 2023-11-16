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
      }

    },
  },
  
  plugins: [],

}

