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
        background: "#0e0b13",
        surface: "#0e0b13",
        "surface-dim": "#0e0b13",
        "surface-bright": "#35303d",
        "surface-container-lowest": "#090712",
        "surface-container-low": "#1a1520",
        "surface-container": "#1f1a26",
        "surface-container-high": "#2a2431",
        "surface-container-highest": "#35303d",
        "surface-variant": "#35303d",
        "on-surface": "#e8e0f0",
        "on-surface-variant": "#cdc4d8",
        "inverse-surface": "#e8e0f0",
        "inverse-on-surface": "#312c38",
        "surface-tint": "#c084fc",

        /* ---- Primary ---- */
        primary: "#e8d5ff",
        "on-primary": "#3b1a6e",
        "primary-container": "#a855f7",
        "on-primary-container": "#4c1d95",
        "inverse-primary": "#7c3aed",

        /* ---- Secondary ---- */
        secondary: "#f0abfc",
        "on-secondary": "#6b21a8",
        "secondary-container": "#9333ea",
        "on-secondary-container": "#f0abfc",

        /* ---- Tertiary ---- */
        tertiary: "#fcd6ff",
        "on-tertiary": "#4a044e",
        "tertiary-container": "#d946ef",
        "on-tertiary-container": "#701a75",

        /* ---- Error ---- */
        error: "#ffb4ab",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",

        /* ---- Outline ---- */
        outline: "#958ea0",
        "outline-variant": "#4a4358",
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
