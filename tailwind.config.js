/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    preflight: false,
    container: false,
  },
  theme: {
    extend: {
      colors: {
        background: 'var(--color-sand)',
        foreground: 'var(--color-anthracite)',
        muted: 'var(--color-surface-subtle)',
        'muted-foreground': 'var(--color-cashmere)',
        champagne: 'var(--color-champagne)',
        powder: 'var(--color-powder)',
      },
    },
  },
  plugins: [],
};
