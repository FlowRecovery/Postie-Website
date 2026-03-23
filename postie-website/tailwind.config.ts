import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'vintage-red': '#C26E63',
        'aged-paper': '#C8BEB2',
        'stamp-blue': '#5C94A6',
        'charcoal': '#383D3D',
        'warm-white': '#FFFBF7',
        cream: '#FFF5E9',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-arsenica)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;