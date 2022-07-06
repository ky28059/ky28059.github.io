import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import PageHeading from '../../components/PageHeading';


export default function Concepts() {
    return (
        <div>
            <Head>
                <title>Concepts | ky28059.github.io</title>
                <meta name="description" content="Various website redesigns and concept pages." />
            </Head>

            <Header />

            <main className="container mt-16">
                <PageHeading className="mb-8">Concepts</PageHeading>
                <p className="max-w-prose">
                    This directory hosts concept designs for projects I've worked on. Note that most (if not all) of these
                    concepts were designed around computer screens and haven't been made responsive for mobile, so viewing
                    them on a phone may produce undesirable results.
                </p>
            </main>
        </div>
    )
}
