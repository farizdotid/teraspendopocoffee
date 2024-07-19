const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
  
    colors: {
      "griko": "#27292b",
      "cultured": "#f9f9f9",
      "flash": "#ffc24f",
      "bluelight": "#85C1E9",
      "black": "#000000",
      "pendopo": "#C1A14E",
      "white": "#FFFFFF",
    },
    fontFamily: {
      sans: ["Inter", fontFamily.sans],
    },
  },
  plugins: [],
};
