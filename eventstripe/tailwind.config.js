/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.html",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ".625rem",
      },
      colors: {
        foreground: "var(--foreground-color)",
        background: "var(--background-color)",
        primary: "var(--primary-color)",
        "primary-dark": "var(--primary-dark-color)",
        secondary: "var(--secondary-color)",
        gray: "var(--gray-color)",
        "dark-gray": "var(--gray-dark-color)",
        success: "var(--success-color)",
      },
      backgroundImage: {
        "primary-gradient": "var(--primary-gradient)",
        "white-gradient": "var(--white-gradient)",
        "gray-gradient": "var(--gray-gradient)",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
        primary: "0 1px 20px var(--shadow-primary-color)",
      },
      boxShadow: {
        custom:
          "0px 1.3px 2.21px 0px #00000002, 0px 3.13px 5.32px 0px #00000003, 0px 5.89px 10.02px 0px #00000004, 0px 10.5px 17.87px 0px #00000005, 0px 19.64px 33.42px 0px #00000005, 0px 47px 80px 0px #00000008",
        "3xl": "0px 4px 45px 0px #00000033;",
        "4xl": "0px 4px 85px 0px #00000033;",
      },
      fontFamily: {
        heading: ["var(--font-bebas-neue)"],
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1340px",
    },
  },
  plugins: [],
}

