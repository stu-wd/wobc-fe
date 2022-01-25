module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js, jsx, ts, tsx}", "./public/index.html"],
  darkMode: "class",
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        blue: {
          dark: "#01588E",
          light: "#0197F6",
        },
        red: {
          dark: "#92140c",
          light: "#DA627D",
        },
        orange: "#FF934F",
        grey: "#34344A",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
