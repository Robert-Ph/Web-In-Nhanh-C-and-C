/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#179957',
        accentDark: '#184D47',
        primary: '#3490dc',
        secondary: '#f1c40f',
        success: '#2ecc71',
        info: '#34495e',
        warning: '#e67e22',
        danger: '#e74c3c',
      },
      fontFamily: {
        sans: ['Inter', 'Arial','sans-serif'],
      },
      container: {
        center: true,
        padding: '15px',
      }
    },
  },
  plugins: [],
}
