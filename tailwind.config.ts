import type { Config } from 'tailwindcss'

// Design tokens mirror the original site exactly so the markup classes port 1:1.
export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './data/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#2D1B4E',
        primary: {
          DEFAULT: '#2D1B4E', // deep purple
          foreground: '#FFF8E7', // cream
        },
        secondary: {
          DEFAULT: '#FFF8E7', // cream
          foreground: '#2D1B4E', // purple text
        },
        softaccent: '#FFD700', // gold (Register Now links)
        bordersubtle: '#E6E1D6',
        ring: '#2D1B4E',
        destructive: {
          DEFAULT: '#DF3131',
          foreground: '#FFFFFF',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        paragraph: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '[120rem]': '120rem',
        '[100rem]': '100rem',
      },
    },
  },
}
