/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ["Montserrat", "serif"],
      merriweather: ["Merriweather", "serif"],
    },
    screens: {
      'sm': '375px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      blue: {
        main: "#06A5E7"
      },
      white: "#fff",
      forHeading: "#26262C",
      forbg: "#F6F7FD",
      forText: "#76767F",
      forBorder: "#DFDFE2",
      black: "#000"
    }
  },
  plugins: [],
}