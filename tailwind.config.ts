import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#121923",
        orange: {
          50: "#fff5ed",
          100: "#ffe7d4",
          500: "#f36a10",
          600: "#de5707",
        },
      },
      boxShadow: {
        lift: "0 22px 70px rgba(18, 25, 35, 0.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
