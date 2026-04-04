/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1e40af', // Industrial Blue
        'brand-orange': '#ea580c', // Technical Orange
        'brand-gray': '#374151', // Graphite Gray
        'brand-light-gray': '#E2E8F0', // Structural Light Gray
        'brand-off-white': '#fafafa', // Off-white
      },
      fontFamily: {
        sans: ['var(--font-pt-sans)', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['var(--font-pt-sans)', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
