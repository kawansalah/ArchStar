/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFE550", // Arch Star Yellow — accent only
        secondary: "#243B98", // Arch Star Blue — structural/text
        charcoal: "#0F172A", // Deep charcoal — footer & dark sections
        brand: {
          yellow: "#FFE550",
          blue: "#243B98",
        },
        neutral: {
          50: "#F8F9FA",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)",
        "card-hover": "0 4px 20px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
