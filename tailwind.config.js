/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "home-dark": `url('/src/Component/DarkThemeBg.png')`,
        "home-light": `url('/src/Component/LightThemeBg.png')`,
      }),
    },
  },
  plugins: [require("daisyui")],
};
