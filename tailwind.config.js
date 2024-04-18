/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
          stroke: "D8D8FF",
          text: "#2A2D48",
        },
        "hack-yellow": {
          DEFAULT: "#FFD541",
          stroke: "#EB9C03",
          text: "#EB9C03",
        },
        "hack-blue": {
          default: "#35A1EF",
          stroke: "#0C5A93",
          text: "#0C5A93",
        },
        "hack-green": {
          default: "#0C5A93",
          stroke: "#4B991C",
          text: "#4B991C",
        },
      },
    },
  },
  plugins: [],
};
