/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
      }
    },
    screens: {
      xxs: "250px",
      xs: "480px",
      sm: "640px",
      md: "950px",
      xmd: "1024px",
      lg: "1280px",
      xl: "1535px",
    },
  },
  plugins: [],
}

