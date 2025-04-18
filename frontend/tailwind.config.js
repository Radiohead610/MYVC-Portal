/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        terminal: ["'Courier New'", "Courier", "monospace"],
      },
    },
  },
  plugins: [],
};

