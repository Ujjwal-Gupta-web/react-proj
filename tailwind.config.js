module.exports = {
  mode: 'jit', // Just-In-Time mode for faster builds and better performance
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Paths to your source files
  darkMode: false, // Set to 'media' or 'class' to enable dark mode
  theme: {
    extend: {
      colors: {
        primary: '#4C51BF', // Define a custom color
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'], // Add a custom font family
      },
      boxShadow: {
        custom: '0 0 10px rgba(0, 0, 0, 0.1)', // Define a custom box shadow
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'], // Add 'active' state to background color
      fontWeight: ['hover'], // Add 'hover' state to font weight
    },
  },
  plugins: [
  ],
};
