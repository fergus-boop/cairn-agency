/** @type {import('tailwindcss').Config} */
// Cairn house palette: ink #1a1714 / gold #b89a4e / paper #f2ece1.
// gold-deep is the text-safe gold on paper (about 5:1); plain gold is for marks, rules and text on ink.
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#1a1714', soft: '#3d3630', muted: '#5f574e' },
        paper: { DEFAULT: '#f2ece1', bright: '#f8f4ec' },
        stone: { DEFAULT: '#e6ddcd', deep: '#d6c9b3' },
        gold: { DEFAULT: '#b89a4e', deep: '#74591f', pale: '#e9dcb9' },
        line: 'rgba(26, 23, 20, 0.14)',
      },
      fontFamily: {
        display: ['Unbounded', 'system-ui', 'sans-serif'],
        body: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
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
