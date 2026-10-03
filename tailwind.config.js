/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"JetBrains Mono"', '"Geist"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        mono: ['"JetBrains Mono"', '"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        display: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: '#0a0a0a',
        surface: '#0f0f0f',
        panel: '#141414',
        border: 'rgba(255,255,255,0.08)',
        'border-strong': 'rgba(255,255,255,0.18)',
        ink: '#e8e8e8',
        dim: '#7a7a7a',
        muted: '#4a4a4a',
        accent: '#00e5a0',
        'accent-dim': 'rgba(0,229,160,0.15)',
        warn: '#ff6b3d',
        ai: '#7c5cff',
        data: '#3da9ff',
        frontend: '#ffb347',
        backend: '#00e5a0',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'data-flow': 'dataFlow 3s linear infinite',
      },
      keyframes: {
        dataFlow: {
          '0%': { strokeDashoffset: '20' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}
