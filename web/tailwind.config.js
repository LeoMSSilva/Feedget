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
        inter: "Inter, sans-serif",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")
  ],
};
