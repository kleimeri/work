/** @type {import('tailwindcss').Config} */
// npx tailwindcss -i ./assets/src/input.css -o ./assets/src/output.css --watch
module.exports = {
  mode: 'jit',
  content: [
    './completed_components/**/*.html',
  ],
  theme: {
    screens: {
      'sm': '250px',
      // => @media (min-width: 250px) { ... }

      'xs': '480px',
      // => @media (min-width: 480px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1780px',
      // => @media (min-width: 1780px) { ... }
    },
  },
  plugins: [],
};


