/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'deep-blue': '#010026',
        blue: '#2CBCE9',
        red: '#DC4492',
        neon: '#440A67',
        redhot: '#FF165D',
        yellow: '#FDCC49',
        grey: '#ededed',
        'dark-grey': '#757575',
        'opaque-black': 'rgba(0,0,0,0.35)',
      },

      backgroundImage: (theme) => ({
        'gradient-rainbow':
          'linear-gradient(to right top, #ff165d, #ff5b2f, #fd9100, #ddc100, #a8eb12)',

        'gradient-rainblue':
          'linear-gradient(to right top, #ff165d, #ff5b2f, #fd9100, #ddc100, #a8eb12)',
      }),
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
        nunitosans: ['Nunito Sans', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
    prefix: 'tw-',
    important: true,
  },
  plugins: [],
};
