/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0B0F',
        bg2: '#111111',
        bg3: '#161616',
        card: '#1A1A1F',
        border: '#222222',
        red: '#D84B4B',
        amber: '#F59E0B',
        offwhite: '#F3F4F6',
        muted: '#666666',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
