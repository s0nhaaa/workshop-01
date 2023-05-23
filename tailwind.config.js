/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(180deg, #64BEFF -50%, #6e96ff 69.71%, #2a65ff 150%)',
      },
      backgroundPosition: {
        'character-red-left': '-16px',
        'character-orange-left': '-32px',
        'character-yellow-left': '-48px',
      },
      animation: {
        'coin-float': {},
      },
    },
  },
  plugins: [],
}
