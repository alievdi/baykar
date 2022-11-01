/** @type {import('tailwindcss').Config} */
module.exports = {
  mod: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '1.875rem',
        '50' : '3.125rem',
      },
      width : {
        '42' : '10rem',
        '46' : '12.5rem',
      },
      height: {
        '15' : '3.75rem'
      },
      padding: {
        '22' : '5.375rem',
        '26' : '6.25rem',
        '38' : '9.375rem',
      },
      margin: {
        '38' : '9.375rem',
      },
      content: {
        link:  'url("./src/static/img/input-arrow.png")'
      }
    },
    screens: {
    
      'sm': {'max': '479px'},
      'md': {'min': '480px', 'max': '767px'},
      'lg': {'min': '768px', 'max': '979px'},
      'xl': {'min': '980px', 'max': '1439px'},
      'xll': {'min': '1440px'},

     
    },
    fontFamily: {
      inter: 'Inter, sans-serif'
    },
    colors: {
      yellow: '#FFC93E',
      darkBlue: '#0A142F',
      darkGray: '#353F5B',
      lightGray: '#E0E5F3',
      white: '#FFFFFF',
      black: '#000000'
    }
  },
  plugins: [],
}