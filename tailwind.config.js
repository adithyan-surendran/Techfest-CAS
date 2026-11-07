/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#030712',
          darker: '#02040a',
          surface: '#070d1e',
          card: 'rgba(11, 18, 36, 0.7)',
          'card-hover': 'rgba(18, 28, 56, 0.85)',
          border: 'rgba(56, 189, 248, 0.15)',
          'border-bright': 'rgba(0, 240, 255, 0.5)',
          cyan: '#00f0ff',
          pink: '#ff007f',
          purple: '#a855f7',
          violet: '#8b5cf6',
          green: '#10b981',
          yellow: '#f59e0b',
          blue: '#3b82f6',
        },
        arcade: {
          dark: '#0a0a14',
          card: '#121226',
          border: '#2a2a4e',
          cyan: '#00f0ff',
          pink: '#ff007f',
          green: '#39ff14',
          yellow: '#ffe600',
          purple: '#9d4edd',
          orange: '#ff5500',
          red: '#ff2a2a',
        }
      },
      fontFamily: {
        cyber: ['"Orbitron"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        space: ['"Space Grotesk"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'monospace'],
        retro: ['"Silkscreen"', 'monospace'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.4), 0 0 40px rgba(0, 240, 255, 0.15)',
        'neon-pink': '0 0 20px rgba(255, 0, 127, 0.4), 0 0 40px rgba(255, 0, 127, 0.15)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(168, 85, 247, 0.15)',
        'neon-green': '0 0 20px rgba(16, 185, 129, 0.4), 0 0 40px rgba(16, 185, 129, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'pixel-cyan': '4px 4px 0px #000, 0 0 12px rgba(0, 240, 255, 0.6)',
        'pixel-pink': '4px 4px 0px #000, 0 0 12px rgba(255, 0, 127, 0.6)',
        'pixel-yellow': '4px 4px 0px #000, 0 0 12px rgba(255, 230, 0, 0.6)',
        'pixel-green': '4px 4px 0px #000, 0 0 12px rgba(57, 255, 20, 0.6)',
        'pixel-box': '4px 4px 0px #000, -4px -4px 0px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 12px rgba(0, 240, 255, 0.7))' },
          '50%': { opacity: '0.6', filter: 'drop-shadow(0 0 4px rgba(0, 240, 255, 0.3))' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    },
  },
  plugins: [],
}
