/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#fef2f3',
          100: '#fde6e7',
          200: '#fbd0d5',
          300: '#f7aab2',
          400: '#f27a8a',
          500: '#e63950',
          600: '#d01f3c',
          700: '#b91736',
          800: '#9a1532',
          900: '#82152f',
        },
      },
      backgroundColor: {
        'primary': 'rgb(var(--bg-primary) / <alpha-value>)',
        'secondary': 'rgb(var(--bg-secondary) / <alpha-value>)',
        'tertiary': 'rgb(var(--bg-tertiary) / <alpha-value>)',
      },
      textColor: {
        'primary': 'rgb(var(--text-primary) / <alpha-value>)',
        'secondary': 'rgb(var(--text-secondary) / <alpha-value>)',
      },
      borderColor: {
        'primary': 'rgb(var(--border-color) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}