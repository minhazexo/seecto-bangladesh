module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#fef08a',
          DEFAULT: '#facc15',
          dark: '#eab308',
        },
        secondary: {
          light: '#86efac',
          DEFAULT: '#22c55e',
          dark: '#16a34a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}