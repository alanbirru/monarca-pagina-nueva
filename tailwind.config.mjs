/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#e06e49",
        secondary: "#046865",
        tertiary: "#b5A997",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
