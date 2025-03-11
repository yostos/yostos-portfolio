/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/globals.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "sans-serif"],
      },
    },
  },
  plugins: [(await import("daisyui")).default],
  daisyui: {
    base: false,
    themes: [
      {
        portfolioTheme: {
          primary: "#3B82F6", // 青色
          secondary: "#10B981", // 緑色
          accent: "#F59E0B", // オレンジ色
          neutral: "#1F2937", // 暗めのグレー
          "base-100": "#F9FAFB", // 明るい背景色
          info: "#38BDF8", // 明るい青色
          success: "#34D399", // 明るい緑色
          warning: "#FBBF24", // 黄色
          error: "#EF4444", // 赤色
        },
      },
    ],
  },
};
