/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'coklat': "url('./assets/background/bg-coklat.jpg')",
        'putih': "url('./assets/background/bg-putih.jpg')",
        'krem': "url('./assets/background/bg-krem.jpg')",
      },
      colors: {
        'primary':'#EAE2C6',
        'secondary':'#BFBBA9',
        'accent':'#ADA991',
      },
    },
  },
  plugins: [],
}