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
        'custom-2': '0 5px 20px 0 #d8d8d8',
      }
    },
  },
  plugins: [],
}