/** @type {import('tailwindcss').Config} */
export default {
  content: ["./node_modules/preline/preline.js"],
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
