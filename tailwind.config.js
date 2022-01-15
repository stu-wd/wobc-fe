module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js, jsx, ts, tsx}", "./public/index.html"],
  darkMode: "class",
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
