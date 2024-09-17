import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: {
          light: "#FFF2CE",
        },
      },
      backgroundImage: {
        main: "url('/img/bg1.jpg')",
      },
      boxShadow: {
        "inner-shadow": "inset 4px 4px 6px 2px rgba(0,0,0, 0.3)",
        white: "5px 6px 19px -8px rgba(0,0,0, 0.3)",
        "white-right": "5px 1px 8px -3px #fff",
      },
    },
  },
  plugins: [],
};
export default config;
