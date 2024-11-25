import type { Config } from "tailwindcss";

export default {
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
      boxShadow: {
        input: "10px 10px 25px -10px rgba(54, 83, 107, 0.25)",
        script: "25px 25px 80px 0px rgba(54, 83, 107, 0.30)",
      },
    },
  },
  plugins: [],
} satisfies Config;
