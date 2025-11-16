import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // Light earth background
        'gradient-dark': 'linear-gradient(135deg, #f5f3ef 0%, #e8e4db 50%, #d4cfc4 100%)',
        // Warm earthy gradient
        'gradient-purple-dark': 'linear-gradient(135deg, #c9a882 0%, #a88860 50%, #8b6f47 100%)',
        // Forest green gradient
        'gradient-green-teal': 'linear-gradient(135deg, #7c9885 0%, #5a8f7b 100%)',
        // Natural earth accent: Warm brown to forest green
        'gradient-accent': 'linear-gradient(135deg, #a88860 0%, #7c9885 50%, #5a8f7b 100%)',
        // Sunset gradient
        'gradient-neon': 'linear-gradient(135deg, #e8a87c 0%, #d4896b 50%, #c9a882 100%)',
        // Deep earth/nature gradient
        'gradient-earth': 'linear-gradient(135deg, #8b6f47 0%, #7c9885 50%, #5a8f7b 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
