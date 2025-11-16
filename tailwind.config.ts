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
        // Gaia-inspired: Deep forest/earth to cosmic purple
        'gradient-dark': 'linear-gradient(135deg, #0a1f1a 0%, #1a2f3a 50%, #1e1b4b 100%)',
        // Mystical purple cosmic gradient
        'gradient-purple-dark': 'linear-gradient(135deg, #1e0a2e 0%, #4c1d95 50%, #6b21a8 100%)',
        // Forest green to teal gradient
        'gradient-green-teal': 'linear-gradient(135deg, #0f4c3a 0%, #14b8a6 100%)',
        // Cosmic accent: Pink to Purple to Cyan
        'gradient-accent': 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #06b6d4 100%)',
        // Electric neon gradient
        'gradient-neon': 'linear-gradient(135deg, #22d3ee 0%, #c084fc 50%, #f0abfc 100%)',
        // Earth/nature gradient
        'gradient-earth': 'linear-gradient(135deg, #78716c 0%, #2d8b5f 50%, #0d9488 100%)',
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
