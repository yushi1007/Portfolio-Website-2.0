const { animate } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    animation: {
      float: 'float 3s infinite',
      refloat: 'refloat 3s infinite',
      bounce: 'bounce 1s infinite;'
    },
    keyframes: {
      float: {
        '0%': {
          transform: 'translateY(0px)',
          animationTimingFunction: 'ease-in-out',
        },
        '50%': {
          transform: 'translateY(-20px)',
          animationTimingFunction: 'ease-in-out',
        },
        '100%': {
          transform: 'translateY(0px)',
          animationTimingFunction: 'ease-in-out',
        },
      },
      refloat: {
        '0%': {
          transform: 'translateY(-20px)',
          animationTimingFunction: 'ease-in-out',
        },
        '50%': {
          transform: 'translateY(0px)',
          animationTimingFunction: 'ease-in-out',
        },
        '100%': {
          transform: 'translateY(-20px)',
          animationTimingFunction: 'ease-in-out',
        },
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateX(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
        },
        '50%': {
          transform: 'translateX(0)',
          animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
