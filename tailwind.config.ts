import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

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
      },
      fontFamily: {
        "metropolis-medium": ["var(--font-metropolis-medium)"],
        "metropolis-light": ["var(--font-metropolis-light)"],
        "metropolis-semibold": ["var(--font-metropolis-semibold)"],
        "metropolis-bold": ["var(--font-metropolis-bold)"],
      },
      screens: {
        xs: "390px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
export default config;
