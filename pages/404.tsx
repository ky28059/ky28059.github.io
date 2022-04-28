import Head from 'next/head';
import Link from "next/link";


export default function PageNotFound() {
    return (
        <div className="h-screen flex items-center justify-center">
            <Head>
                <title>404 | ky28059.github.io</title>
                <meta name="description" content="Page not found." />
            </Head>

            <main>
                <h1 className="font-bold text-7xl mb-6 underline decoration-grapefruit">404</h1>
                <p className="mb-1.5">Your requested page was not found.</p>
                <Link href="/"><a className="font-medium hover:underline">Return to home →</a></Link>
            </main>
        </div>
    )
}
