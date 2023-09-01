import {ReactNode} from 'react';
import {Metadata} from 'next';
import Link from 'next/link';

// Components
import Header from '../../components/Header';
import {SectionHeading} from '../../components/Section';


export const metadata: Metadata = {
    title: 'Concepts',
    description: 'Various website redesigns and concept pages.'
}

export default function Concepts() {
    return (
        <div>
            <Header />

            <main className="container mt-16">
                <SectionHeading className="underline decoration-grapefruit mb-4">Concepts</SectionHeading>
                <p className="max-w-4xl mb-10">
                    This directory hosts design concepts and mockups for projects I've worked on. Many of these concepts
                    may not be polished (or mobile-friendly), so handle with care!
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
        <Link href={href} className="text-inherit hover:no-underline flex">
            <div className="rounded-lg overflow-hidden w-96 border border-gray-500/25 hover:border-dark dark:hover:border-white transition duration-200">
                <img src={src} alt={name} className="w-full" />
                <div className="px-4 pt-3 pb-4">
                    <h3 className="font-medium mb-1">{name}</h3>
                    <p className="text-sm">{children}</p>
                </div>
            </div>
        </Link>
    )
}
