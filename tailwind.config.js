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
      text: {
        black: '#333333',
        white: '#FEFEFE',
      },
      backgrounds: {
        100: '#FFFEFE',
        200: '#FCFCFC',
        300: '#222222',
      },
    },

    fontSize: {
      'display-1': [
        '36px',
        {
          letterSpacing: 0,
          fontWeight: 'bold',
          lineHeight: '44px',
        },
      ],
      'display-2': [
        '24px',
        {
          letterSpacing: 0,
          fontWeight: '600',
          lineHeight: '34px',
        },
      ],
      'display-3': [
        '22px',
        {
          letterSpacing: 0,
          fontWeight: '600',
          lineHeight: '27px',
        },
      ],
      'display-4': [
        '20px',
        {
          letterSpacing: 0,
          fontWeight: '600',
          lineHeight: '24px',
        },
      ],
      'display-5': [
        '20px',
        {
          letterSpacing: 0,
          fontWeight: '500',
          lineHeight: '24px',
        },
      ],
      subtitle: [
        '20px',
        {
          letterSpacing: 0,
          fontWeight: '500',
          lineHeight: '24px',
        },
      ],
      'display-body': [
        '16px',
        {
          letterSpacing: 0,
          fontWeight: '400',
          lineHeight: '24px',
        },
      ],
      'display-small': [
        '14px',
        {
          letterSpacing: 0,
          fontWeight: '600',
          lineHeight: '24px',
        },
      ],
      'pre-title': [
        '10px',
        {
          letterSpacing: '3%',
          fontWeight: '700',
          lineHeight: '14px',
        },
      ],
      'button-text': [
        '16px',
        {
          letterSpacing: '2%',
          fontWeight: '500',
          lineHeight: '14px',
        },
      ],
      link: [
        '16px',
        {
          letterSpacing: '2%',
          fontWeight: '600',
          lineHeight: '16px',
          textDecoration: 'underline',
        },
      ],
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      mulish: ['Mulish', 'sans-serif'],
      worksans: ['Work Sans', 'sans-serif'],
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
