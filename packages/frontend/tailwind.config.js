/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      heading: ["Raleway"],
      body: ["Poppins"],
      caption: ["Poppins"],
    },
    extend: {
      colors: {
        "primary-red": "#FD484F",
        "primary-pink": "#EE2A7B",
        "secondary-blue": "#07B1EF",
        "secondary-green": "#01DF85",
        white: "#FFFFFF",
        gray: {
          100: "#F5F5F5",
          200: "#A2A2A2",
          300: "#535353",
        },
      },
      width: {
        custom: "313px",
      },
    },
  },
  plugins: [],
};
