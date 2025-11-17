/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        "black-deep": "#020617",
        "slate-dark": "#0f172a",
        border: "#06b6d4",
        strong: "#0ea5e9",
        tag: "#22d3ee1a",
        "gradient-main":
          "bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-transparent",
        "gradient-text":
          "bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-transparent",
      },
    },
  },
  plugins: [],
};
