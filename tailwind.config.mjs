import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f4f7f2',
          '100': '#e6eae1',
          '200': '#ccd6c4',
          '300': '#a7b99c',
          '400': '#7e9770',
          '500': '#5e7950',
          '600': '#475f3c',
          '700': '#384c30',
          '800': '#2e3d28',
          '900': '#263321',
          '950': '#182115',
        },
        'secondary': {
          '50': '#fffce7',
          '100': '#fff9c0',
          '200': '#fff185',
          '300': '#ffe03f',
          '400': '#ffcc0b',
          '500': '#f4b200',
          '600': '#d28800',
          '700': '#a85f00',
          '800': '#8a4a09',
          '900': '#6d380d',
          '950': '#451e03',
        },
      }
    },
  },
  plugins: [flowbite.plugin()],
};
