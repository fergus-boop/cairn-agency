/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ca-black':   '#060d08',
        'ca-surface': '#0d1a10',
        'ca-deep':    '#0a1209',
        'ca-green':   '#2d6a4f',
        'ca-accent':  '#3d9e6e',
        'ca-heather': '#7c5c8a',
        'ca-text':    '#e8f0ea',
        'ca-muted':   '#8aab92',
        'ca-frost':   '#b8d4be',
        'ca-border':  '#1a2e1e',
      },
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%':      { opacity: '0.7', transform: 'scale(1.08)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%':      { opacity: '0.9' },
        },
        dotBounce: {
          '0%, 80%, 100%': { transform: 'scale(0.6)', opacity: '0.4' },
          '40%':           { transform: 'scale(1)', opacity: '1' },
        },
        snowDrift: {
          '0%':   { transform: 'translateY(-10px) translateX(0px)', opacity: '0' },
          '10%':  { opacity: '1' },
          '90%':  { opacity: '0.6' },
          '100%': { transform: 'translateY(110vh) translateX(40px)', opacity: '0' },
        },
      },
      animation: {
        fadeInUp:    'fadeInUp 0.7s ease forwards',
        fadeIn:      'fadeIn 0.6s ease forwards',
        shimmer:     'shimmer 3s linear infinite',
        pulseSlow:   'pulseSlow 4s ease-in-out infinite',
        glowPulse:   'glowPulse 3s ease-in-out infinite',
        dotBounce:   'dotBounce 1.4s ease-in-out infinite',
        snowDrift:   'snowDrift linear infinite',
      },
    },
  },
  plugins: [],
};
