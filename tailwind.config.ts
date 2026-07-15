import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00317D",
          50: "#E6EBF5",
          100: "#C0CEEA",
          200: "#809ED5",
          300: "#406DBF",
          400: "#1A4F9E",
          500: "#00317D",
          600: "#002A6B",
          700: "#002259",
          800: "#001A47",
          900: "#001235",
        },
        accent: {
          DEFAULT: "#FFD601",
          50: "#FFFDE6",
          100: "#FFF9B3",
          200: "#FFF280",
          300: "#FFEB4D",
          400: "#FFE41A",
          500: "#FFD601",
          600: "#E6C000",
          700: "#B39600",
          800: "#806B00",
          900: "#4D4000",
        },
        alert: {
          DEFAULT: "#FD3D36",
          50: "#FFF0EF",
          100: "#FFDCDA",
          200: "#FEB9B6",
          300: "#FE9691",
          400: "#FD6A64",
          500: "#FD3D36",
          600: "#E4372F",
          700: "#B22B25",
          800: "#801F1B",
          900: "#4D1310",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
