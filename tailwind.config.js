/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7f4',
          100: '#dcebe2',
          200: '#bcd8c9',
          300: '#90bea7',
          400: '#629d83',
          500: '#447f67',
          600: '#346552',
          700: '#2b5143',
          800: '#244238',
          900: '#1f3730',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
