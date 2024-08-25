module.exports = {
  content: [
    "./**/*.html", // Specify the paths to all of your template files
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#1E40AF",
        customGray: "#6B7280",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
