/* eslint-env node */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{vue,js}"],
  theme: {
    extend: {colors},
  },
  plugins: [],
}

