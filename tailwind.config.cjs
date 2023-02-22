/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'font-1': ['Bungee', 'cursive'],
      'font-2': ['Carter One', 'cursive'],
      'font-3': ['Orbitron', 'sans-serif'],
      'font-4': ['Pridi', 'serif'],
      'font-5': ['Rubik Mono One', 'sans-serif'],
      'font-6': ['Volkhov', 'serif'],
    }
  },
  plugins: [],
}