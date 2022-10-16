/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#DCCA87',
                secondary: '#0C0B08',
                dimWhite: '#AAAAAA',
            },
            fontFamily: {
                cormorant: ['Cormorant Upright', 'serif'],
                openSans: ['Open Sans', 'sans-serif'],
            },
            backgroundImage: {
                image: "url('src/assets/bg.png')",
            },
        },
    },
    plugins: [],
};
