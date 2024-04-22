import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';


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
                primary: {
                    DEFAULT: '#757575', // TODO
                    dark: '#BABABA'
                },
                secondary: {
                    DEFAULT: '#757575',
                    dark: '#777777',
                },
                tertiary: {
                    DEFAULT: colors.gray['300'],
                    dark: '#404040'
                }
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
    plugins: [],
}

export default config;
