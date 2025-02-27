/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        'text-blue': '#203245',
        'text-blue-hover': '#3A5B7D',
        'secondary-text-color': '#6B7280',
        'main-color': '#008BB0',
        'banner-color': '#f0efef',
        'main-color-hover': '#006B88',
        'secondary-container-color': '#9CA3AF',
        'text-main-color': '#006699'
      },
    },
  },
  plugins: [],
}

