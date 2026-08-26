/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        pixel: ['"Press Start 2P"', 'monospace'],
        retro: ['"Silkscreen"', 'monospace'],
        mono: ['"JetBrains Mono"', '"Courier New"', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'pixel-cyan': '4px 4px 0px #000, 0 0 12px rgba(0, 240, 255, 0.6)',
        'pixel-pink': '4px 4px 0px #000, 0 0 12px rgba(ff, 0, 127, 0.6)',
        'pixel-yellow': '4px 4px 0px #000, 0 0 12px rgba(ff, 230, 0, 0.6)',
        'pixel-green': '4px 4px 0px #000, 0 0 12px rgba(57, 255, 20, 0.6)',
        'pixel-box': '4px 4px 0px #000, -4px -4px 0px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'bounce-pixel': 'bouncePixel 1s infinite alternate',
        'coin-spin': 'coinSpin 1.2s steps(4) infinite',
        'run-cycle': 'runCycle 0.6s steps(4) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 8px #00f0ff)' },
          '50%': { opacity: '0.7', filter: 'drop-shadow(0 0 2px #00f0ff)' },
        },
        bouncePixel: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-8px)' },
        },
        coinSpin: {
          '0%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(0.1)' },
          '100%': { transform: 'scaleX(1)' },
        }
      }
    },
  },
  plugins: [],
}
