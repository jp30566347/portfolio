import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import { slate, gray, teal } from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [nextui()],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e293b",
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        accent: {
          DEFAULT: "#0d9488",
          light: "#5eead4",
          dark: "#14b8a6",
        },
        neutral: gray,
        // Keep legacy colors for backward compatibility during transition
        "bitcoin-orange": "#f7931a",
        "bitcoin-gray": "#4d4d4d",
      },
      fontFamily: {
        sans: ["century-gothic", "sans-serif"],
      },
      letterSpacing: {
        wider: "0.05em",
        widest: "0.1em",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "soft-lg": "0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
};
export default config;
