/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {  fontFamily: {
      Hiatus: ["Hiatus", "sans-serif"]
      // Add more custom font families as needed
    }},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}