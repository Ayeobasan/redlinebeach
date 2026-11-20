import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#e6f0f5",
          100: "#c0d9e5",
          200: "#96bfd3",
          300: "#6ca5c1",
          400: "#4d91b3",
          500: "#2e7ea5",
          600: "#266f94",
          700: "#1c5d7e",
          800: "#134b68",
          900: "#123B50",
          950: "#0a2435",
        },
        tropical: {
          50: "#edf7ee",
          100: "#d2ebd5",
          200: "#b4deb9",
          300: "#96d19d",
          400: "#82B989",
          500: "#6ba872",
          600: "#5a9461",
          700: "#487b4e",
          800: "#37623c",
          900: "#264929",
        },
        sand: {
          50: "#fdfbf7",
          100: "#F3E8D5",
          200: "#ecdcc1",
          300: "#e3ceab",
          400: "#d9bf95",
          500: "#cfb07f",
          600: "#b8975f",
          700: "#9a7c47",
          800: "#7b6238",
          900: "#5c492a",
        },
        warm: {
          white: "#FFFCF7",
        },
        coral: {
          50: "#fce8e9",
          100: "#f7c5c8",
          200: "#f19fa3",
          300: "#eb797e",
          400: "#e65d63",
          500: "#D92F36",
          600: "#c42830",
          700: "#a82027",
          800: "#8c1a1f",
          900: "#701317",
        },
        aqua: {
          50: "#eef8f7",
          100: "#d5efed",
          200: "#B9DFDC",
          300: "#9acfcc",
          400: "#7cbfbb",
          500: "#5dafaa",
          600: "#4a9994",
          700: "#3a7d79",
          800: "#2b615e",
          900: "#1c4543",
        },
        dark: "#202D32",
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        accent: ['"Playfair Display"', "Georgia", "serif"],
      },
      fontSize: {
        "hero-desktop": ["clamp(3.5rem, 5vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "hero-mobile": ["clamp(2.5rem, 8vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "section-desktop": ["clamp(2.25rem, 3.5vw, 3.25rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "section-mobile": ["clamp(1.75rem, 5vw, 2.25rem)", { lineHeight: "1.2" }],
      },
      backgroundImage: {
        "gradient-ocean": "linear-gradient(135deg, #123B50 0%, #1c5d7e 50%, #2e7ea5 100%)",
        "gradient-sand": "linear-gradient(180deg, #FFFCF7 0%, #F3E8D5 100%)",
        "gradient-tropical": "linear-gradient(135deg, #82B989 0%, #6ba872 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "wave": "wave 8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        wave: {
          "0%, 100%": { transform: "translateX(0) translateY(0)" },
          "25%": { transform: "translateX(5px) translateY(-3px)" },
          "50%": { transform: "translateX(0) translateY(-5px)" },
          "75%": { transform: "translateX(-5px) translateY(-3px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
