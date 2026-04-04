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
          light: '#F7D060',
          DEFAULT: '#D4AF37', // Burnished Gold from PDF
          dark: '#B2912D',
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
