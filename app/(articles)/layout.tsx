import type { ReactNode } from 'react';
import Link from 'next/link';


export default function Layout(props: { children: ReactNode }) {
    return (
        <main>
            <div className="bg-midnight pt-20">
                <div className="container">
                    <Link href="/" className="text-secondary text-sm -ml-5 block w-max">
                        ← Back to home
                    </Link>
                </div>
            </div>

            {props.children}
        </main>
    )
}
