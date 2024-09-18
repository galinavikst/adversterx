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
      backgroundSize: {
        "120%": "120%",
      },
      boxShadow: {
        "inner-shadow": "inset 4px 4px 6px 2px rgba(0,0,0, 0.3)",
        "full-inner-shadow": "inset 0px 0px 10px 5px rgba(0,0,0, 0.3)",
        white: "5px 6px 19px -8px rgba(0,0,0, 0.3)",
        "white-right": "5px 1px 8px -3px #fff",
      },
      animation: {
        appear: "appear 0.5s linear 1",
      },
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
