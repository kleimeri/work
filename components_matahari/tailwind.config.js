/** @type {import('tailwindcss').Config} */
// npx tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css --watch
module.exports = {
  content: ['./componets/index.html'],
  theme: {
    extend: {
      fontSize: {
        xxs: ".625rem",
        "3xl": "1.75rem",
      },
      borderRadius: {
        lg: "0.625rem",
        "2xl": "1.25rem",
        "4xl": "1.875rem",
      },
      colors: {
        foreground: "var(--foreground-color)",
        background: "var(--background-color)",
        "primary-dark": "var(--primary-dark-color)",
        black: "var(--black-color)",
        primary: "rgba(var(--primary-color))",
        secondary: "var(--secondary-color)",
        "secondary-dark": "var(--secondary-dark-color)",
        "secondary-light": "var(--secondary-light-color)",
        "green-dark": "var(--green-dark-color)",
        gray: "rgba(var(--gray-color))",
        "gray-light": "var(--gray-light-color)",
        success: "var(--success-color)",
      },
      fontFamily: {
        heading: ["var(--font-philosopher)"],
        body: ["var(--font-lato)"],
      },
      container: {
        center: true,
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1340px',
        '2xl': '1530px',
      }
    },
  },
};
