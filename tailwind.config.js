/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        cecOrange: "#AD7900",
        cecRed: "#F10500",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        oxygen: ["Oxygen", "serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
