/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Using modern `rgb`
        primaryBg: "rgb(var(--bg-primary) / 1)",
        secondaryBg: "rgb(var(--bg-secondary)/ 1)",

        primaryBtn: "rgb(var(--btn-primary) / 1)",
        secondaryBtn: "rgb(var(--btn-secondary)/ 1)",
      },
      screens: {
        xxs: "375px",
        xs: "540px",
      },
    },
  },
  plugins: [],
};
