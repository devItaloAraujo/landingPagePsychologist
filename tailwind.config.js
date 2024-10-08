/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-1': '#45316E',
        'brand-2': '#98FAEC',
        'first-blue': '#032041',
        'second-blue': '#0c417e',
      },
    },
  },
  plugins: [],
}

