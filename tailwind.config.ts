import { TfiRulerPencil } from "react-icons/tfi";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container : {
        center: true,
        padding: "15px"
      },
      colors: {
        accent: "#08E95E"
      },
    },
  },
  plugins: [],
} satisfies Config;
