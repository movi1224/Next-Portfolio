/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl':
          '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);',
      },

      keyframes: {
        blink: {
          '50%': { 'border-color': 'transparent' },
        },
      },

      animation: {
        blink: 'blink .7s steps(1) infinite',
      },

      colors: {
        orange: '#f49867',
      },
      fontFamily: {
        title: ['Manrope'],
      },
    },
  },
  plugins: [],
}
