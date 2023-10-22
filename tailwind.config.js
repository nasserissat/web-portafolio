/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 10px 15px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}

