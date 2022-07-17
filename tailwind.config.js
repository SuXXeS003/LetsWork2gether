/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#171637",
        300: "#6D6BB2",
        400: "#4E4C80",
        500: "#171637",
        600: "#0C0B37",
        700: "#010037",
      },

      secondary: {
        DEFAULT: "#00ADFF",
        300: "#7AD4FF",
        400: "#52C7FF",
        500: "#00ADFF",
        600: "#0097DF",
        700: "#006498",
      },

      gray: {
        DEFAULT: "#171637",
        50: "#F3F3F3",
        100: "#DDDDDD",
        200: "#C6C6C6",
        300: "#B0B0B0",
        400: "#9B9B9B",
        500: "#868686",
        600: "#727272",
        700: "#5E5E5E",
        800: "#4B4B4B",
        900: "#393939",
      },

      black: "#000000",
      white: "#FFFFFF",
    },

    fontFamily: {
      sans: ["Inter"],
    },
fontSize:{
    'xs': '.75rem',
    'sm': '.875rem',
    'tiny': '.875rem',
    'base': '1rem',
    'lg': '1.125rem',
    'xl': '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
    '7xl': '5rem',
},

    extend: {},
  },
  plugins: [],
};
