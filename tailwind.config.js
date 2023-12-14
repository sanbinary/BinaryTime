/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        pink: {
          400: "#FF8AC5",
        },
        rose: {
          100: "#FFDFE7",
        },
        violet: {
          500: "#9059FF",
        },
        purple: {
          300: "#D9BFFF",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
