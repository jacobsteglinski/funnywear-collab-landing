/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#ffbf00',
          'yellow-soft': '#FFD966',
          orange: '#ff7a00',
          'orange-light': '#ff9933',
          black: '#252525',
          cream: '#FFFBF3',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        'sm-2': '14px',
        'md-2': '20px',
        'lg-2': '28px',
        'xl-2': '36px',
      },
      boxShadow: {
        'soft-sm': '0 2px 8px rgba(37,37,37,0.04), 0 1px 2px rgba(37,37,37,0.06)',
        'soft-md': '0 8px 24px rgba(37,37,37,0.06), 0 2px 6px rgba(37,37,37,0.04)',
        'soft-lg': '0 20px 50px rgba(37,37,37,0.08), 0 8px 20px rgba(255,122,0,0.06)',
        'soft-xl': '0 30px 80px rgba(37,37,37,0.12), 0 10px 30px rgba(255,122,0,0.08)',
        'glow-yellow': '0 10px 40px rgba(255,191,0,0.25)',
        'glow-orange': '0 10px 40px rgba(255,122,0,0.30)',
      },
    },
  },
  plugins: [],
}
