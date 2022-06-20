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
        customDarkGrey: '#777777',
        customBlue: '#1784E8',
        customGreen: '#10A365',
        customOrange: '#E86217',
        customBlack: '#222222',
        customTransparentBlack: '#22222225',
      },
      screens: {
        xs: '480px',
      },
      backgroundImage: {
        heroImageMobile: 'url("../src/assets/images/header/plusBlue.svg")',
        heroImageDesktop: 'url("../src/assets/images/header/heroImage.svg")',
        aboutBgImage: 'url("../src/assets/images/main/bg/plusGreen.svg")',
        projectsBgImage: `url(
          "../src/assets/images/main/bg/triangleOrange.svg")`,
      },
    },
  },
  plugins: [],
};
