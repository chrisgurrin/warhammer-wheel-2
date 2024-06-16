/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend:{
      colors: {
        'theme-1': 'var(--color-theme-100)',
        'theme-2': 'var(--color-theme-200)',
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
      },
    }
  },
  plugins: [],
}

