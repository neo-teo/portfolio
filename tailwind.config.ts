import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#393939',
        'blue': '#3B8BEB',
        'green': '#5CD595',
        'red': '#EF5C5C',
      },
      screens: {
        'xsm': '395px',
      }
    }
  },
  plugins: [],
};
export default config;
