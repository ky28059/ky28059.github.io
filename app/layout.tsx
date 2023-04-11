import {Metadata} from 'next';
import {ReactNode} from 'react';

import '../styles/index.scss';


export const metadata: Metadata = {
    title: {
        template: '%s | ky28059.github.io',
        default: 'ky28059.github.io'
    }
}

export default function Layout(props: {children: ReactNode}) {
    return (
        <html className="dark">
            <head>
                <meta charSet="utf-8" />
            </head>
            <body className="text-dark dark:text-white dark:bg-midnight">
                {props.children}
            </body>
        </html>
    )
}
