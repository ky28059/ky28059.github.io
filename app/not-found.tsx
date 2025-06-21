import type { Metadata } from 'next';
import Link from 'next/link';

// Components
import PageHeading from '@/components/PageHeading';
import { IoMdCloseCircle } from 'react-icons/io';


export const metadata: Metadata = {
    title: '404',
    description: 'Page not found.'
}

export default function PageNotFound() {
    return (
        <div className="h-screen flex items-center justify-center">
            <main className="relative pl-14">
                <IoMdCloseCircle className="absolute left-0 top-2 text-5xl text-grapefruit" />
                <PageHeading className="mb-5">404.</PageHeading>
                <p>Your requested page was not found.</p>
                <Link href="/" className="font-medium text-inherit">Return to home →</Link>
            </main>
        </div>
    )
}
