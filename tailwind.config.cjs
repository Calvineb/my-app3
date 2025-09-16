/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"], // all your Svelte files
  theme: {
    extend: {}, // optional: add custom colors, fonts, etc.
  },
  // Ensure these utility classes are always included (avoid accidental purge)
  safelist: [
    'bg-yellow-200',
    'text-red-600',
    'link',
  ],
  plugins: [require("daisyui")], // include DaisyUI plugin
}
