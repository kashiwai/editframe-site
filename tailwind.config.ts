import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50:  "#f0f4ff",
          100: "#e0e9ff",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
        },
        accent: "#a78bfa",
        neon:  "#22d3ee",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.3), transparent)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease both",
        "fade-in":    "fadeIn 0.4s ease both",
        "float":      "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "gradient":   "gradientShift 8s ease infinite",
        "marquee":    "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp:  { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn:  { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        float:   { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        gradientShift: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%":     { backgroundPosition: "100% 50%" },
        },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
    },
  },
  plugins: [],
};
export default config;
