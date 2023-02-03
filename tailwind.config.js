/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './context/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      primary: {
        50: '#FA7D8A',
        100: '#E95867',
        200: '#E7283C',
        300: '#E2081E',
        400: '#C21527',
        500: '#8C131F',
        600: '#671B23',
        700: '#4A1D22',
      },
      secondary: {
        50: '#F8F5F3',
        100: '#DAD6D3',
        200: '#C8C2BE',
        300: '#B5B0AD',
        400: '#9B928D',
        500: '#867D77',
        600: '#68605B',
        700: '#413C38',
      },
      neutral: {
        100: '#FBFBFB',
        200: '#EEEEEE',
        300: '#D3D3D3',
        400: '#929292',
        500: '#777777',
        600: '#5F5F5F',
        700: '#494949',
        800: '#292727',
      },
      color: {
        black: '#333333',
        white: '#FEFEFE',
      },
      background: {
        100: '#FFFEFE',
        200: '#FCFCFC',
        300: '#222222',
      },
    },

    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      mulish: ['Mulish', 'sans-serif'],
      worksans: ['Work Sans', 'sans-serif'],
      calibri: ['calibri', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
