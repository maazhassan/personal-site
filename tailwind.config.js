module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0d1017',
        'text-blue': '#35415b',
        'blue-gray': '#6f8695',
        'blue': '#2fcccc',
        'green': '#7ad94e',
        'orange': '#e56f20',
      },
      fontFamily: {
        'sans': ['Rubik', 'sans-serif']
      },
      screens: {
        '3xl': '2000px',
      }
    },
  },
  plugins: [],
}
