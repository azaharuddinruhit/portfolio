export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['"DM Mono"', 'monospace'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        'bg-dark':       '#1C2226',
        'card-dark':     '#232D32',
        'border-dark':   '#2a3840',
        'tag-bg-dark':   '#1a3035',
        'tag-bd-dark':   '#2a5050',
        'accent-dark':   '#2EC4B6',
        'text-dark':     '#E4EEEE',
        'muted-dark':    '#7A9499',

        'bg-light':      '#F0F7F7',
        'card-light':    '#FFFFFF',
        'border-light':  '#D1E8E8',
        'tag-bg-light':  '#E0F0EE',
        'tag-bd-light':  '#B0D8D4',
        'accent-light':  '#1A9B90',
        'text-light':    '#0F2426',
        'muted-light':   '#4A6A6E',
      },
      boxShadow: { glow: '0 0 24px rgba(0, 212, 255, 0.15)' },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
