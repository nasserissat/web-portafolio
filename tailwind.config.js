/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003366',
        secondary: '#fff',
        tertiary: '#160C21',
        // On hover
        primary_hover: '#003366',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        scroll: 'scroll 5s linear infinite',
      }
    },
  },
  plugins: [],
}

