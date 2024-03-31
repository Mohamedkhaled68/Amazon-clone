/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                amazonBackground: "#EAEDED",
                amazonLight_blue: "#232F3A",
                amazonYellow: "#FEBD69",
                amazonDefault: "#131921",
            },
        },
    },
    plugins: [],
};
