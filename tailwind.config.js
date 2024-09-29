/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#009B9E",
        mute: "#B1ADAD",
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.4) 0px 30px 90px',
      }
    },
  },
  plugins: [],
}