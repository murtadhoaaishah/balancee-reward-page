/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightblue: "#e6f1f7",
        grey: "#8c8c8c",
        blue: "#0571a8",
        ash: "#f5f5f5",
        royalblue: "#f5f5f5",
        darkash: "#e6e7eb",
      },
    },
  },
  plugins: [],
};
