/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        pastelgreyblue: "#C3D1E3", // Pastel gråblå
        greenblue: "#7AA89F", //Blågrøn
        kingblue: "#3A4DA3", // Kongeblå
        white: "#ffffff", // Hvid
        black: "#000000", //Sort
        beige: "#F7F5EF", //lys beige
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};