import type { ReactNode } from 'react';


export default function Layout(props: { children: ReactNode }) {
    return (
        <main className="container pt-20 pb-24">
            {props.children}
        </main>
    )
}
