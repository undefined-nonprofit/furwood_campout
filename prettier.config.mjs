/** @type {import('prettier').Config} */
import plugin from 'tailwindcss/plugin'
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  // tailwindcss
  tailwindAttributes: ["theme"],
  tailwindFunctions: ["twMerge", "createTheme"],
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        'h1': { fontSize: config('theme.fontSize.2xl') },
        'h2': { fontSize: config('theme.fontSize.xl') },
        'h3': { fontSize: config('theme.fontSize.lg') },
      })
    })
  ]
};
