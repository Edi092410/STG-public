/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "stg-color": "#1D3049",
      },
      screens: {
        "2xs": "420px",
        "3xl": "1900px",
      },
    },
  },
  plugins: [],
};
