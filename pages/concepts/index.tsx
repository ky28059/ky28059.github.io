import {ReactNode} from 'react';
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
                <p className="max-w-4xl mb-12">
                    This directory hosts concept designs for projects I've worked on. Note that most (if not all) of these
                    concepts were designed around computer screens and haven't been made responsive for mobile, so viewing
                    them on a phone may produce undesirable results.
                </p>

                <section className="flex flex-wrap gap-6">
                    <ImageCard name="RabbitSign" src="/concepts/thumbnails/rabbitsign.png" href="/concepts/rabbitsign">
                        A redesign of the RabbitSign landing page.
                    </ImageCard>
                    <ImageCard name="GAtM" src="/concepts/thumbnails/gatm.png" href="/concepts/gunn-gatm">
                        A redesign and port of <code>gunn-gatm.github.io</code> to React.
                    </ImageCard>
                </section>
            </main>
        </div>
    )
}

function ImageCard(props: {name: string, src: string, href: string, children: ReactNode}) {
    const {name, src, href, children} = props;
    return (
        <Link href={href} className="text-inherit hover:no-underline">
            <div className="rounded-lg overflow-hidden w-96 border border-gray-500/25 hover:border-dark dark:hover:border-white transition duration-200">
                <img src={src} alt={name} className="w-full" />
                <div className="px-4 pt-2 pb-4">
                    <h3 className="font-medium text-lg mb-1">{name}</h3>
                    <p className="text-sm">{children}</p>
                </div>
            </div>
        </Link>
    )
}
