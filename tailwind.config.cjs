/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1e40af', // Azul industrial
          gray: '#374151', // Cinza grafite
          orange: '#ea580c', // Laranja técnico (usar com moderação)
          offwhite: '#fafafa', // Branco off-white
        }
      },
      fontFamily: {
        sans: ['var(--font-pt-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'ui-serif', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
