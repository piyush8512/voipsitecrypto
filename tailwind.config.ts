import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#0B1120',
        'lime-accent': '#DCE735',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
export default config;