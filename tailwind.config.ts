import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tjd-green': '#1B5E3E',
        'tjd-green-dark': '#0F4A2E',
        'tjd-beige': '#F5F1EB',
        'marble-green': '#004F4C',
      },
      fontFamily: {
        kohinoor: ['Kohinoor', 'sans-serif'],
        'lamoric-rowen': ['Lamoric Rowen', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
