/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: ["hover"],
      fontFamily: {
        sans: ["Noto Sans", "sans"],
        satoshi: ["Satoshi", "sans"], // 'sans' is a generic font-family
      },
    },
  },
  plugins: [],
};
