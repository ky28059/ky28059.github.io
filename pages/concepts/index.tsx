import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';


export default function Concepts() {
    return (
        <div>
            <Head>
                <title>Concepts | ky28059.github.io</title>
                <meta name="description" content="Various website redesigns and concept pages." />
            </Head>

            <Header />

            <h1 className="text-9xl font-bold text-center mt-16 mb-8">Concepts</h1>
            <p className="text-center">This directory hosts concept designs for projects I've worked on. ___.</p>
        </div>
    )
}
