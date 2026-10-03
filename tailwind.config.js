/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', '"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: '#08090b',
        ink: '#e8eaed',
        dim: '#8b8f97',
        muted: '#5a5f68',
        line: 'rgba(255,255,255,0.08)',
        'line-strong': 'rgba(255,255,255,0.18)',
        accent: '#00e5a0',
        'accent-soft': 'rgba(0,229,160,0.12)',
        ai: '#8b7cff',
        warm: '#f2b482',
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
}
