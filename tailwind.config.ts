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
        background: "#FAF8F5",
        foreground: "#121214",
        lego: {
          red: "#E3000B",
          "red-dark": "#B80009",
          yellow: "#FFD000",
          "yellow-dark": "#E5BA00",
          "yellow-light": "#FFF3B3",
          blue: "#0055BF",
          "blue-dark": "#003E8C",
          "blue-light": "#E0EEFF",
          green: "#00853D",
          "green-dark": "#00662F",
          "green-light": "#D8F3E5",
          purple: "#7C3AED",
          "purple-light": "#EDE9FE",
          orange: "#FF6200",
          "orange-light": "#FFE8D6",
          charcoal: "#18181B",
          cream: "#F4EFE6",
          bone: "#EDE8DC",
          plate: "#DFD8C8",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "Inter", "sans-serif"],
        display: ["var(--font-outfit)", "Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "stud": "inset 0 2px 2px rgba(255,255,255,0.4), 0 3px 6px rgba(0,0,0,0.15)",
        "stud-inset": "inset 0 2px 4px rgba(0,0,0,0.25)",
        "block": "0 10px 0 0 rgba(0,0,0,0.12), 0 20px 25px -5px rgba(0,0,0,0.1)",
        "block-sm": "0 4px 0 0 rgba(0,0,0,0.12), 0 6px 12px -2px rgba(0,0,0,0.08)",
        "block-red": "0 8px 0 0 #B80009, 0 16px 20px -4px rgba(227, 0, 11, 0.35)",
        "block-yellow": "0 8px 0 0 #C99700, 0 16px 20px -4px rgba(255, 208, 0, 0.35)",
        "block-blue": "0 8px 0 0 #003E8C, 0 16px 20px -4px rgba(0, 85, 191, 0.35)",
        "block-green": "0 8px 0 0 #00602B, 0 16px 20px -4px rgba(0, 133, 61, 0.35)",
        "block-charcoal": "0 8px 0 0 #09090B, 0 16px 20px -4px rgba(0,0,0,0.4)",
        "tactile": "0 12px 30px -4px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)",
        "tactile-lg": "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "snap": "snapEffect 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        snapEffect: {
          "0%": { transform: "scale(0.95) translateY(-6px)" },
          "70%": { transform: "scale(1.03) translateY(2px)" },
          "100%": { transform: "scale(1) translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
