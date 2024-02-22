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
      boxShadow: {
        thin: "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
        thick: "0px 30px 54px 0px rgba(0, 0, 0, 0.15)",
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      aspectRatio: {
        "1024/768": "1024 / 768",
      },
    },
  },
  plugins: [],
};
