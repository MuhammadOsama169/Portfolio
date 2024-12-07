/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        redhot: '#FF165D',
        yellow: '#FDCC49',
      },

      backgroundImage: (theme) => ({
        'gradient-mint':
          'linear-gradient(89.75deg, #F3EFE0 0.14%, #BEE0D6 24.69%, #BEE0D6 79.15%, #F3EFE0 99.72%);',

        'gradient-purple':
          'linear-gradient(89.75deg, #CDF0EA 15.36%, rgba(196, 144, 228, 0.61) 50.11%, #CDF0EA 81.74%);',

        'gradient-redish':
          'linear-gradient(90deg, #d53369 0%, #daae51 100%, rgba(190,48,246,1) 60%, rgba(0,255,205,1) 100%)',
        'gradient-rainblue':
          'linear-gradient(176deg, rgba(0,255,185,1) 0%, rgba(192,0,255,1) 52%, rgba(190,48,246,1) 60%, rgba(0,255,205,1) 100%)',
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
