/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E2D703',
        'nav': '#181D23',
        'secundary': '#2F3438',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/images/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
}