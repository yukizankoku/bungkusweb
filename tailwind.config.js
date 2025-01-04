/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pastel: {
          red: '#FFD1D1',
          blue: '#D1E7FF',
          green: '#D1FFD1',
          orange: '#FFE4B5',
          gray: '#F5F5F5',
          brown: '#D9B7A8',
        },
      },
    },
  },
  plugins: [],
}