const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        prompt: ["Prompt", ...defaultTheme.fontFamily.sans],
        nstl: ["'Noto Sans Thai Looped'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
