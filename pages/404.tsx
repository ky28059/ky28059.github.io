import Head from 'next/head';
import Link from "next/link";
import PageHeading from '../components/PageHeading';
import {IoMdCloseCircle} from 'react-icons/io';


export default function PageNotFound() {
    return (
        <div className="h-screen flex items-center justify-center">
            <Head>
                <title>404 | ky28059.github.io</title>
                <meta name="description" content="Page not found." />
            </Head>

            <main className="relative pl-14">
                <IoMdCloseCircle className="absolute left-0 top-2 text-5xl text-grapefruit" />
                <PageHeading className="mb-5">404.</PageHeading>
                <p>Your requested page was not found.</p>
                <Link href="/"><a className="font-medium text-inherit">Return to home →</a></Link>
            </main>
        </div>
    )
}
