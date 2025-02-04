import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

import headlessuiPlugin from '@headlessui/tailwindcss';


const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                midnight: '#1B1B1B',
                dark: '#26252C',
                light: '#FFF8E8',
                grapefruit: '#FF6347',
                pomegranate: '#E03C31',
                primary: 'rgb(var(--primary) / <alpha-value>)',
                secondary: 'rgb(var(--secondary) / <alpha-value>)',
                tertiary: 'rgb(var(--tertiary) / <alpha-value>)'
            }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '2rem',
                sm: '3rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '8rem',
            }
        }
    },
    plugins: [
        headlessuiPlugin,
        plugin(({ addVariant }) => {
            addVariant('slider-thumb', ['&::-webkit-slider-thumb', '&::-moz-range-thumb']);
            addVariant('scrollbar', ['&::-webkit-scrollbar']);
            addVariant('scrollbar-thumb', ['&::-webkit-scrollbar-thumb']);
        })
    ],
}

export default config;
