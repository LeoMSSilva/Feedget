module.exports = {
  content: [
    "./src/**/*.{html,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          400: "#996DFF",
          500: "#8257E5",
        },
      },
      borderRadius: {
        md: "4px",
      },
      fontFamily: {
        sans: "Inter",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")
  ],
};
