/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#172e74', // default blue color
        },
        secondary: '#008cff', 
        hover: '#0e7490',   
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}