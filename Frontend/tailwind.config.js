/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aqua: {
          500: '#00FFFF',
          600: '#00E5E5',
          700: '#00CCCC',
        },
      },
    },
  },
  plugins: [],
};