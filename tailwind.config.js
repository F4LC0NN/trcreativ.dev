/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Fira Code"'],
      },
      colors: {
        customWhite: '#EFEFEF',
        customGrey: '#D9D9D9',
        customBlue: '#1784E8',
        customGreen: '#17E890',
        customOrange: '#E86217',
        customBlack: '#222222',
      },
    },
  },
  plugins: [],
};
