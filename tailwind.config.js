/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-hack-gray",
    "bg-hack-gray-stroke",
    "border-hack-gray-stroke",
    "text-hack-gray-text",
    "stroke-hack-gray-stroke",
    "bg-hack-yellow",
    "bg-hack-yellow-stroke",
    "border-hack-yellow-stroke",
    "text-hack-yellow-text",
    "stroke-hack-yellow-stroke",
    "bg-hack-blue",
    "bg-hack-blue-stroke",
    "border-hack-blue-stroke",
    "text-hack-blue-text",
    "stroke-hack-blue-stroke",
    "bg-hack-green",
    "bg-hack-green-stroke",
    "border-hack-green-stroke",
    "text-hack-green-text",
    "stroke-hack-green-stroke",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "Propmt", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: { DEFAULT: "#2A2D48" },
        secondary: "#f7f7f8",
        "hack-gray": {
          DEFAULT: "#D8D8FF",
          stroke: "#D8D8FF",
          text: "#2A2D48",
        },
        "hack-yellow": {
          DEFAULT: "#FFD541",
          stroke: "#EB9C03",
          text: "#EB9C03",
        },
        "hack-blue": {
          DEFAULT: "#35A1EF",
          stroke: "#0C5A93",
          text: "#0C5A93",
        },
        "hack-green": {
          DEFAULT: "#A2FF6A",
          stroke: "#4B991C",
          text: "#4B991C",
        },
      },
    },
  },
  plugins: [],
};
