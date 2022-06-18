/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{svg, png, jpg, jpeg}',
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
        transparentBeige: '#FFE2B750',
      },
      backgroundImage: {
        heroImageMobile: 'url("../src/assets/images/header/plusBlue.svg")',
        heroImageDesktop: 'url("../src/assets/images/header/heroImage.svg")',
      },
    },
  },
  plugins: [],
};
