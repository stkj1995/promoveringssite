/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        turkish: "#51A1E1", //turkis
        kingblue: "#0E4E87", // Kongeblå
        white: "#ffffff", // Hvid
        almostblack: "#03101C", //Sort
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