/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  theme: {
    extend: {
      colors: {
        'surface':      '#141414',
        'surface-1':    '#1E1E1E',
        'surface-2':    '#2A2A2A',
        'surface-3':    '#3A3A3A',
        'content':      '#E8E8E8',
        'content-2':    '#A0A0A0',
        'content-3':    '#6E6E6E',
        'accent':       '#1E5EFF',
        'accent-hover': '#3B74FF',
        'accent-dim':   '#1A2F6E',
        'border':       '#2A2A2A',
        'border-focus': '#1E5EFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        'feed': '600px',
        'layout': '1100px',
      },
    },
  },
  plugins: [],
}
