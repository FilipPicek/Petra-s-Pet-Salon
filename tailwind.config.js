/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#fdfaf5',
          100: '#f9f3e8',
          200: '#f2e6d1',
          300: '#e8d4b0',
          400: '#d9ba88',
          500: '#c9a165',
        },
        brown: {
          50: '#f8f5f2',
          100: '#ede7df',
          200: '#d9cdbf',
          300: '#c0ab96',
          400: '#a68a6e',
          500: '#8c6f52',
          600: '#6e5742',
          700: '#5a4636',
          800: '#4a3b2e',
          900: '#3d3227',
        },
      },
    },
  },
  plugins: [],
};
