import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import typographyStyles from './typography'
import typographyPlugin from '@tailwindcss/typography'
import formsPlugin from '@tailwindcss/forms'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
        primary: {
          DEFAULT: '#3b82f6',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
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
        jumpseller: {
          50: '#f1f4e1',
          100: '#e7edcf',
          200: '#dde5bc',
          300: '#d4deaa',
          400: '#cad797',
          500: '#c0d085',
          600: '#b6c872',
          700: '#acc160',
          800: '#a3ba4d',
          900: '#99b23b',
          950: '#8fab28',
        },
        feup: '#842a18',
      },
    },
  },
} satisfies Config
