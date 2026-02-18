/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFE550", // Arch Star Yellow
        secondary: "#243B98", // Arch Star Blue
        brand: {
          yellow: "#FFE550",
          blue: "#243B98",
        },
      },
    },
  },
  plugins: [],
};
