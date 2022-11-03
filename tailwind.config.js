const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './src/**/*.{js,jsx}'
    ],
    theme: {
        extend: {
            screens: {
                xs: '480px',
            },
        },
        fontFamily: {
            share: ['Share', ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [],
}
