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
        blue: {
          light: "#1D86C3",
          DEFAULT: "#183064",
          dark: "#03045e",
        },
        orange: {
          // light: "#",
          DEFAULT: "#D83600",
          // dark: "#",
        },
        yellow: {
          // light: "#",
          DEFAULT: "#FEC24D",
          // dark: "#",
        },
        green: {
          // light: "#",
          DEFAULT: "#34A001",
          // dark: "#",
        },
        black: {
          light: "#F1F2F4",
          DEFAULT: "#040E1F",
          dark: "#000000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
