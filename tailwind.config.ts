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
        primary: "#0d6ee6",
        "primary-dark": "#0b62d4",
        bg: "#f8fafd",
        "fg-dark": "#0c1723",
        surface: "#ffffff",
        muted: "#616a75",
        "muted-bg": "#edf2f8",
        success: "#3bb360",
        "info-blue": "#259cde",
        ink: "#0c1723",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        md: "8px",
        lg: "14px",
        xl: "18px",
      },
      boxShadow: {
        card: "0px 1px 2px rgba(12,23,35,0.04), 0px 8px 24px -8px rgba(12,23,35,0.08)",
        elegant: "0px 10px 30px -12px rgba(13,110,230,0.22)",
        nav: "0 0.67px 0 0 rgba(12,23,35,0.12)",
        "blue-glow": "0px 10px 30px -12px rgba(13,110,230,0.22)",
        "btn-blue": "0 4px 14px rgba(13,110,230,0.2)",
      },
      maxWidth: {
        container: "1280px",
      },
      keyframes: {
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.4s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
