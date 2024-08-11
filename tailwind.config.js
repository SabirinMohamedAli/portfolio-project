/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#2ECC71', // adjust to the green color from the design
        'green-dark': '#27AE60', // darker shade for hover
        'dark-blue': '#2C3E50', // dark blue from the design
        'dark-blue-light': '#34495E', // lighter shade for hover
      },
    },
  },
  plugins: [],
}


