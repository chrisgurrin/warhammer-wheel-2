/** @type {import('tailwindcss').Config} */

const theme = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'theme-1': 'var(--color-theme-100)',
                'theme-2': 'var(--color-theme-200)',
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',

                'item-light': 'var(--color-item-light)',
                'item-dark': 'var(--color-item-dark)',

                'item-in-progress': 'var(--color-item-in-progress)',
            },
        },
    },
    plugins: [],
};

export default theme;
