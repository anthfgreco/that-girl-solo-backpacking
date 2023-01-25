/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        annieUseYourTelescope: ["Annie Use Your Telescope", "sans-serif"],
        lora: ["Lora", "sans-serif"],
        pacifico: ["Pacifico", "sans-serif"],
        playfairDisplay: ["Playfair Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
