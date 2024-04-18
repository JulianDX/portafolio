/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        puntoCinco: ".5px",
      },
      scale: {
        101: "1.01",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
