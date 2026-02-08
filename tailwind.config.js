/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        space: "#050816",
        neon: "#38bdf8",
      },
    },
  },
  plugins: [],
};
