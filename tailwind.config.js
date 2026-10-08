/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#111827',
        primary: '#3B82F6',
        secondary: '#10B981',
        accent: '#F59E0B',
        muted: '#F3F4F6',
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        pixel: ['"Pixelify Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.02em',
      },
    },
  },
  plugins: [],
}
