import {ReactNode} from 'react';
import '../scss/index.scss';


export default function Layout(props: {children: ReactNode}) {
    return (
        <html className="dark">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className="text-dark dark:text-white dark:bg-midnight">
                {props.children}
            </body>
        </html>
    )
}
