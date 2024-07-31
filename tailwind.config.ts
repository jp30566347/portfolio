import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import { orange, slate, gray } from "tailwindcss/colors";

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
        primary: slate,
        secondary: "#F7931A",
        neutral: gray,
      },
    },
  },
};
export default config;
