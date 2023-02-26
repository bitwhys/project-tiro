const defaultTheme = require('tailwindcss/defaultTheme')
const { radixToTailwind } = require('./styles/helpers')
const { mauve, mauveDark } = require('@radix-ui/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['components/**/*.{ts,tsx}', 'app/**/*.{ts,tsx}', 'pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: radixToTailwind(mauve),
        neutralDark: radixToTailwind(mauveDark),
      },
      fontFamily: {
        sans: ['var(--catalina-font)', ...defaultTheme.fontFamily.sans],
        heading: ['var(--visby-font)', ...defaultTheme.fontFamily.sans],
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
