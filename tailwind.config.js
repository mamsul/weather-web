/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        '.forest-bg': {
          background: 'url(/src/assets/forest.jpg) no-repeat',
          'background-size': 'cover',
          'background-position': 'center',
        },
      };

      addUtilities(utilities);
    }),
  ],
};
