/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#FFEA70',
          DEFAULT: '#FFD700',
          dark: '#B8860B',
        },
        dark: {
          DEFAULT: '#0A0B0D',
          card: '#15171B',
        }
      },
      fontFamily: {
        header: ['Orbitron', 'sans-serif'],
        content: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'guard-bg': "url('/hero-bg.png')",
      },
    },
  },
  plugins: [],
}
