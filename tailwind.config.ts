import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F5E6D3',
          100: '#E8CDAA',
          200: '#DBB480',
          300: '#CE9B57',
          400: '#C1822D',
          500: '#A36B25',
          600: '#85541D',
          700: '#673D15',
          800: '#49260D',
          900: '#2B0F05',
        },
        coffee: {
          50: '#F2E6D9',
          100: '#E5CDB3',
          200: '#D8B38D',
          300: '#CB9967',
          400: '#BE7F41',
          500: '#A06735',
          600: '#824F29',
          700: '#63371D',
          800: '#452011',
          900: '#270905',
        },
      },
      backgroundImage: {
        'gradient-coffee': 'linear-gradient(to right, #A06735, #CE9B57)',
        'gradient-brand': 'linear-gradient(to right, #673D15, #A36B25)',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'coffee-lg': '0 10px 25px rgba(160, 103, 53, 0.2)',
        'brand-xl': '0 15px 30px rgba(103, 61, 21, 0.15)',
      },
      keyframes: {
        'subtle-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        'subtle-bounce': 'subtle-bounce 2s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
export default config