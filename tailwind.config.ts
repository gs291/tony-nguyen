import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ---- Surface system ---- */
        background: "#131313",
        surface: "#131313",
        "surface-dim": "#131313",
        "surface-bright": "#3a3939",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-low": "#1c1b1b",
        "surface-container": "#201f1f",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353534",
        "surface-variant": "#353534",
        "on-surface": "#e5e2e1",
        "on-surface-variant": "#bac9cc",
        "inverse-surface": "#e5e2e1",
        "inverse-on-surface": "#313030",
        "surface-tint": "#00daf3",

        /* ---- Primary ---- */
        primary: "#c3f5ff",
        "on-primary": "#00363d",
        "primary-container": "#00e5ff",
        "on-primary-container": "#00626e",
        "inverse-primary": "#006875",

        /* ---- Secondary ---- */
        secondary: "#dcb8ff",
        "on-secondary": "#480081",
        "secondary-container": "#7701d0",
        "on-secondary-container": "#dcb7ff",

        /* ---- Tertiary ---- */
        tertiary: "#ffeac0",
        "on-tertiary": "#3e2e00",
        "tertiary-container": "#fec931",
        "on-tertiary-container": "#6f5500",

        /* ---- Error ---- */
        error: "#ffb4ab",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",

        /* ---- Outline ---- */
        outline: "#849396",
        "outline-variant": "#3b494c",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-lg": [
          "48px",
          { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "900" },
        ],
        "headline-lg": [
          "32px",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "headline-lg-mobile": [
          "28px",
          { lineHeight: "1.2", fontWeight: "700" },
        ],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-sm": [
          "12px",
          { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "500" },
        ],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
      },
      spacing: {
        unit: "4px",
        "container-margin": "20px",
        gutter: "16px",
        "section-gap": "40px",
      },
    },
  },
  plugins: [],
};

export default config;
