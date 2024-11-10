/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        turkish: "#3D9AEB", //turkis
        kingblue: "#0E4E87", // Kongeblå
        white: "#ffffff", // Hvid
        almostblack: "#03101C", //Sort
        beige: "#F7F5EF", //lys beige
        pastelblue: "#DFEEFC", //pastelblå
        brown: "#817141", //brun
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