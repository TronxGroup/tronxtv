import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tronx: {
          bg: "#0B0B0E",
          card: "#121217",
          accent: "#59F1C8",
          accent2: "#7AA2FF"
        }
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.25)"
      },
      borderRadius: {
        '2xl': "1.25rem"
      }
    },
  },
  plugins: [],
};
export default config;
