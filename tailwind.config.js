/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/javascripts/**/*.js',
    './app/assets/javascripts/**/*.jsx',
    './app/assets/javascripts/**/*.ts',
    './app/assets/javascripts/**/*.tsx',
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: []
}