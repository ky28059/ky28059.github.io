import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';

import '@/styles/index.css';


export const metadata: Metadata = {
    title: {
        template: '%s | kevin.fish',
        default: 'kevin.fish'
    }
}

const inter = Inter({
    subsets: ['latin']
});

export default function Layout(props: { children: ReactNode }) {
    return (
        <html className="dark scroll-smooth">
            <head>
                <meta charSet="utf-8" />
            </head>
            <body className="text-dark dark:text-white dark:bg-midnight" style={inter.style}>
                {props.children}
            </body>
        </html>
    )
}
