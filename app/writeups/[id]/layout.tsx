import type { ReactNode } from 'react';
import Link from 'next/link';


export default function Layout(props: { children: ReactNode }) {
    return (
        <>
            <Link href="/writeups" className="text-secondary text-sm mb-10 -ml-5 block w-max">
                ← Back to writeups
            </Link>

            {props.children}
        </>
    )
}
