/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        900: 900,
        800: 800,
        700: 700,
        600: 600,
        500: 500,
        400: 400,
        300: 300,
      },     
      borderColor: {
        blackColor: "rgba(229, 229, 229, 1)",
        creamBorder: "rgba(163, 161, 161, 0.5)",
        thickBorder: "rgba(0, 0, 0, 0.4)",
        chocolatee: "rgba(0, 0, 0, 0.4)",
        white: "dadce0",
      },
      screens: {
        'xs': '200px', 
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}