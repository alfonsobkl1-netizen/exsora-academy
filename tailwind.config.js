/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        exsora: {
          dark: '#0f1f18',
          lime: '#c5ff00',
          cream: '#ede8e0',
          blue: '#3d5a7e',
          black: '#1a1a1a',
          gray: '#6b6b6b',
          lightgray: '#f5f5f5',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
