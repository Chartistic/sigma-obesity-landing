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
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        patient: {
          50: "#fef8f8",
          75: "#fdefef",
          100: "#fde9ea",
          200: "#ffc3c3",
          300: "#f79e9f",
          400: "#ef7b80",
          500: "#e4505c",
          600: "#b54450",
          700: "#843c43",
          800: "#5b3136",
          900: "#282525",
          950: "#151414",
        },
        doctor: {
          50: "#f5fafe",
          100: "#e6f2fc",
          200: "#c8e4f9",
          300: "#87ccf4",
          400: "#52b0db",
          500: "#4494b8",
          600: "#357793",
          700: "#285d73",
          800: "#1a4252",
          900: "#0f2229",
          950: "#041115",
        },
      },
      maxWidth: {
        prose: "65ch",
      },
    },
  },
  plugins: [],
};
export default config;
