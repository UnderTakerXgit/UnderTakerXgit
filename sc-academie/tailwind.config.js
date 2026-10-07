/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './partials/**/*.html'],
  theme: {
    extend: {
      colors: {
        ink: '#14213D',      // глубокий синий — основной текст и тёмные блоки
        bleu: {
          50: '#EEF2FB',
          100: '#DCE4F7',
          500: '#2F55D4',
          600: '#2445B5',
          700: '#1B3590',
        },
        rouge: {
          400: '#F0646B',
          500: '#E63946',
          600: '#C92C39',
        },
        creme: '#FBF7F0',
        sable: '#F2EADC',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(20, 33, 61, 0.18)',
      },
    },
  },
  plugins: [],
};
