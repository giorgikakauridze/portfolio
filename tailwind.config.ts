import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/**/*.js",
    "./node_modules/@nextui-org/react",
  ],
  safelist: ["spinner", "modal-open", "modal-bottom", "modal-footer"],
  theme: {
    extend: {
      screens: {
        verybig: { max: "2000px" },
        1700: { max: "1700px" },
        1850: { max: "1850px" },
        mobile: { max: "1024px" },
      },
      zIndex: {
        modal: "9999",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [nextui()],
};

export default config;
