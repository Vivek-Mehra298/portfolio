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
        background: "#000000",
        surface: "#0f0f0f",
        border: "#1a1a1a",
        primary: "#2a2a2a",
        secondary: "#404040",
        "text-primary": "#ffffff",
        "text-muted": "#a0a0a0",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "brand-gradient": "linear-gradient(to bottom right, #2a2a2a, #404040)",
      },
    },
  },
  plugins: [],
};
export default config;
