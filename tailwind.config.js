/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
      primary: "#121212",
      secondary: "#252525",
      Neutral: "#a3a3a3",
      blue: "#1B59F8",
    },
    screens: {
      '2xl': {'max': '1536px'},
      // => @media (max-width: 1536px) { ... }
      'xl': {'max': '1280px'},
      // => @media (max-width: 1280px) { ... }
      'lg': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }
      'md': {'max': '768px'},
      // => @media (max-width: 768px) { ... }
      'sm': {'max': '640px'},
      // => @media (max-width: 640px) { ... }
      },
    extend: {},
  },
  plugins: [],
}