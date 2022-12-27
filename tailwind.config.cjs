//  @type {import('tailwindcss').Config}

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bk: "#171717",
      },
    },

    fontFamily: {
      fira: ["'Fira Code'", "monospace"],
    },
  },
  plugins: [],
};
