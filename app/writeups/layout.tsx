import type { ReactNode } from 'react';
import Link from 'next/link';


export default function Layout(props: { children: ReactNode }) {
    return (
        <main className="container pt-20 pb-24">
            <Link href="/" className="text-secondary text-sm mb-10 -ml-5 block w-max">
                ← Back to home
            </Link>

            {props.children}
        </main>
    )
}
