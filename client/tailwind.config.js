module.exports = {
  corePlugins: {
    // ...
    appearance: false
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '3xl': '29100px',
        '4xl': '2984px'
      },
      colors: {
        primary: '#61DAFB',
        secondary: '#282C34'
      },
      height: {
        custom_vh2: '20vh',
        custom_vh3: '30vh',
        custom_vh5: '50vh',
        custom_vh6: '60vh',
        custom_vh7: '70vh'
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite'
      },
      appearance: false
    },
    appearance: false
  },
  variants: {
    extend: {}
  },
};
