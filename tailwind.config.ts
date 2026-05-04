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
        background: "#F9FAFB", // Light gray background
        card: "#FFFFFF",
        primary: "#111827",
        muted: "#6B7280",
        accent: {
          blue: "#3B82F6",
          green: "#10B981",
          pink: "#EC4899",
          yellow: "#F59E0B",
          purple: "#8B5CF6"
        }
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.3)',
      }
    },
  },
  plugins: [],
};
export default config;
