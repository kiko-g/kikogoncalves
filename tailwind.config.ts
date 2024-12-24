import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import typographyStyles from './typography'
import typographyPlugin from '@tailwindcss/typography'
import formsPlugin from '@tailwindcss/forms'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  plugins: [typographyPlugin, formsPlugin],
  theme: {
    fontSize: {
      xxs: ['0.725rem', { lineHeight: '1.25rem' }],
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    minWidth: {
      '96': '24rem',
      '112': '28rem',
      '128': '32rem',
      '144': '36rem',
      '160': '40rem',
    },
    typography: typographyStyles,
    extend: {
      colors: {
        feup: '#842a18',
        navy: {
          25: '#fbfcfc',
          50: '#f9fafa',
          75: '#f6f7f8',
          100: '#f3f4f5',
          200: '#e4e5e9',
          300: '#d2d4d9',
          400: '#9ea2ac',
          500: '#6e717d',
          600: '#4e535f',
          700: '#3b404b',
          800: '#232830',
          900: '#141821',
          950: '#0b0e18',
        },
      },
    },
  },
} satisfies Config
