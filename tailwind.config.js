/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020817',
          900: '#030d1f',
          800: '#061429',
          700: '#0a1f3d',
          600: '#0f2d57',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          glow: '#00f5ff',
        },
        electric: {
          blue: '#4facfe',
          purple: '#a855f7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'gradient-x': 'gradient-x 4s ease infinite',
        'gradient-ring': 'gradient-ring 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'spin-slow': 'spin 8s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'gradient-ring': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(0, 245, 255, 0.3), 0 0 40px rgba(0, 245, 255, 0.1)' },
          '50%': { 'box-shadow': '0 0 40px rgba(0, 245, 255, 0.6), 0 0 80px rgba(0, 245, 255, 0.3)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'cyber-grid': `
          linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px)
        `,
        'hero-gradient': 'radial-gradient(ellipse at top, #0a1f3d 0%, #020817 70%)',
        'card-glass': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        'neon-gradient': 'linear-gradient(135deg, #00f5ff, #4facfe, #a855f7)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 245, 255, 0.4), 0 0 60px rgba(0, 245, 255, 0.1)',
        'neon-blue': '0 0 20px rgba(79, 172, 254, 0.4), 0 0 60px rgba(79, 172, 254, 0.1)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'card-hover': '0 20px 60px rgba(0, 245, 255, 0.15), 0 0 30px rgba(0, 245, 255, 0.1)',
      },
    },
  },
  plugins: [],
}
