/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'monika-pink': '#FF69B4',
        'monika-purple': '#9370DB',
        'monika-light': '#FFE6F3',
        'monika-dark': '#1a1a2e',
      },
      fontFamily: {
        'comic': ['Comic Neue', 'cursive'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

