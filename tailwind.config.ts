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
        // Coffee-inspired color palette
        coffee: {
          50: '#f5f0e6',
          100: '#e6d5c1',
          200: '#d6ba9b',
          300: '#c69e75',
          400: '#b6824f',
          500: '#a66629', // Primary coffee brown
          600: '#8c5622',
          700: '#73461c',
          800: '#593615',
          900: '#3f260f'
        },
        cream: {
          50: '#fff9f0',
          100: '#fff3e0',
          200: '#ffebc2',
          300: '#ffdfa3',
          400: '#ffd485',
          500: '#ffc966'
        },
        // Accent colors inspired by coffee regions
        'coffee-accent': {
          ethiopian: '#8C5E2A', // Ethiopian coffee warmth
          colombian: '#5D4037', // Colombian coffee depth
          brazilian: '#6D4C41'  // Brazilian coffee richness
        }
      },
      backgroundImage: {
        'gradient-coffee': 'linear-gradient(to right, #8C5E2A, #5D4037)',
        'texture-coffee-beans': 'url("/assets/coffee-beans-texture.png")',
      },
      fontFamily: {
        'coffee-sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        'coffee-serif': ['Merriweather', 'Georgia', 'serif']
      },
      boxShadow: {
        'coffee-card': '0 4px 6px rgba(134, 94, 42, 0.1), 0 1px 3px rgba(134, 94, 42, 0.08)',
        'coffee-elevated': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)'
      },
      animation: {
        'coffee-bean-float': 'coffee-bean-float 3s ease-in-out infinite',
        'coffee-steam-rise': 'coffee-steam-rise 2s linear infinite'
      },
      keyframes: {
        'coffee-bean-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'coffee-steam-rise': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '0', transform: 'translateY(-30px)' }
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}

export default config