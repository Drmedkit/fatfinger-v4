/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-surface': 'var(--bg-surface)',
        text: 'var(--text)',
        'text-muted': 'var(--text-muted)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        'accent-pop': 'var(--accent-pop)',
      },
      fontFamily: {
        clash: ['Clash Display', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        fira: ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}
