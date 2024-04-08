/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('/img/bgvector.webp')", // Adjust the path as needed
      },
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
