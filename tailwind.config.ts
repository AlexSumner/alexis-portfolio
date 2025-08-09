// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // 👈 clave para que funcione con document.documentElement.classList.toggle('dark')
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
