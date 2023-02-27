const defaultTheme = require('tailwindcss/defaultTheme')
const { radixToTailwind } = require('./styles/helpers')
const { mauve, mauveDark } = require('@radix-ui/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['components/**/*.{ts,tsx}', 'app/**/*.{ts,tsx}', 'pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0B0911',
        neutral: radixToTailwind(mauve),
        neutralDark: radixToTailwind(mauveDark),
        blue: {
          50: '#dfeeff',
          100: '#b0ccff',
          200: '#7eaaff',
          300: '#4b87ff',
          400: '#1a65ff',
          500: '#004ce6',
          600: '#003bb4',
          700: '#002a82',
          800: '#001951',
          900: '#000821',
        },
        pink: {
          50: '#ffe1f5',
          100: '#ffb1d9',
          200: '#ff7ebf',
          300: '#ff4ca4',
          400: '#ff1a8a',
          500: '#e60071',
          600: '#b40058',
          700: '#82003f',
          800: '#500026',
          900: '#20000f',
        },
        lime: {
          50: '#f5ffdb',
          100: '#e6ffae',
          200: '#d6ff7d',
          300: '#c7ff4b',
          400: '#b7ff1a',
          500: '#9ee600',
          600: '#7ab300',
          700: '#578000',
          800: '#334d00',
          900: '#101b00',
        },
      },
      fontFamily: {
        sans: ['var(--visby-font)', ...defaultTheme.fontFamily.sans],
        heading: ['var(--catalina-font)', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        1: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 1px 2px rgba(91, 104, 113, 0.32)',
        2: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24)',
        3: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 8px 16px rgba(91, 104, 113, 0.24)',
        4: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 12px 24px rgba(91, 104, 113, 0.24)',
        5: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 24px 32px rgba(91, 104, 113, 0.24)',
        6: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 40px 64px rgba(91, 104, 113, 0.24)',
      },
      backgroundImage: {
        orangeJuice: 'linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%)',
      },
      spacing: {
        97: '28rem',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
