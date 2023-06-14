/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary-dark": "#2d2d2d",
        "color-primary-dark-2": "#1b1b1b",
        "color-white": "#ffffff",
        "color-accent-blue": "#383B98",
        "color-text-gray": "#586167",
        "color-accent-orange": "#ff8c41",
      },
    },
  },
  plugins: [],
};
