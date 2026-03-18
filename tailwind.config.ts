import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        surface: "#12121a",
        "surface-2": "#1a1a26",
        border: "#2a2a3a",
        accent: "#7c5cfc",
        cyan: "#00d4ff",
        green: "#00e68a",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        serif: ['Young Serif', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;