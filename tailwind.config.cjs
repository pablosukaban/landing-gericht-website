/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#DCCA87',
                dimWhite: '#AAAAAA',
            },
            fontFamily: {
                cormorant: ['Cormorant Upright', 'serif'],
                openSans: ['Open Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
};