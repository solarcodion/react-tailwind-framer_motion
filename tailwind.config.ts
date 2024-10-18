import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aeonik: ['"Aeonik Pro"', "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        normal: "#8E8D90",
        active: "#ffffff",
        step_bg: "#28272C",
        step_bg_active: "#00ff00",
        input_bg: "#1D1C21",
        gradient:
          "linear-gradient(90deg, rgba(246, 177, 101, 0.2) 0%, rgba(145, 100, 245, 0.2) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
