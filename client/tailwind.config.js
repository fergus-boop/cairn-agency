/** @type {import('tailwindcss').Config} */
// Owner-restored Cairn palette. Ink/paper aliases keep existing page composition consistent.
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#e8f0ea', soft: '#b8d4be', muted: '#8aab92' },
        paper: { DEFAULT: '#060d08', bright: '#0d1a10' },
        stone: { DEFAULT: '#0d1a10', deep: '#1a2e1e' },
        gold: { DEFAULT: '#b89a4e', deep: '#3d9e6e', pale: '#d2bc83' },
        line: '#1a2e1e',
        'ca-black': '#060d08', 'ca-surface': '#0d1a10', 'ca-deep': '#0a1209',
        'ca-green': '#2d6a4f', 'ca-accent': '#3d9e6e', 'ca-heather': '#7c5c8a',
        'ca-text': '#e8f0ea', 'ca-muted': '#8aab92', 'ca-frost': '#b8d4be', 'ca-border': '#1a2e1e',
      },
      fontFamily: {
        display: ['Unbounded', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '76rem',
        prose: '38rem',
      },
      keyframes: {
        dotBounce: {
          '0%, 80%, 100%': { transform: 'scale(0.6)', opacity: '0.4' },
          '40%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        dotBounce: 'dotBounce 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
