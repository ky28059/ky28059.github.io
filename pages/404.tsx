import Head from 'next/head';
import Link from 'next/link';
import PageHeading from '../components/PageHeading';
import {IoMdCloseCircle} from 'react-icons/io';


export default function PageNotFound() {
    return (
        <div className="h-screen flex items-center justify-center">
            <Head>
                <title>404 | ky28059.github.io</title>
                <meta name="description" content="Page not found." />
            </Head>

            <main className="relative pl-12">
                <IoMdCloseCircle className="absolute left-0 top-2 text-4xl text-grapefruit" />
                <PageHeading className="mb-6">404</PageHeading>
                <p className="mb-1">Your requested page was not found.</p>
                <Link href="/" className="font-medium text-inherit">Return to home →</Link>
            </main>
        </div>
    )
}
