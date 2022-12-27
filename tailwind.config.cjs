//  @type {import('tailwindcss').Config}

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ora: "#A5C9CA",
        darkOra: "#434242",
        ora2: "#2C3333",
      },
    },

    fontFamily: {
      fira: ["'Fira Code'", "monospace"],
    },
  },
  plugins: [],
};

