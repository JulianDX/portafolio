/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('/img/aaabstract.webp')", // Adjust the path as needed
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
