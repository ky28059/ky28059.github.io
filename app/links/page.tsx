import type { Metadata } from 'next';
import Link from 'next/link';

// Components
import Section, { SectionHeading } from '../../components/Section';


type LinkData = {
    name: string,
    href: string,
}

export const metadata: Metadata = {
    title: 'Links',
    description: 'A collection of interesting blogs, articles, and more.'
}

export default function Links() {
    return (
        <Section>
            <Link href="/" className="text-secondary text-sm mb-10 -ml-5 block w-max">
                ← Back to home
            </Link>

            <SectionHeading className="underline decoration-grapefruit">
                Links
            </SectionHeading>
            <p className="mb-8 max-w-prose">
                A collection of interesting blogs, articles, and other sites.
            </p>

            <ul className="flex flex-col gap-2 list-disc pl-6">
                {links.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </Section>
    )
}

const links: LinkData[] = [{
    name: 'Parsing C++ is literally undecidable',
    href: 'https://blog.reverberate.org/2013/08/parsing-c-is-literally-undecidable.html'
}, {
    name: '93% of Paint Splatters are Valid Perl Programs',
    href: 'https://www.mcmillen.dev/sigbovik/'
}, {
    name: '[V8 Deep Dives] Random Thoughts on Math.random()',
    href: 'https://apechkurov.medium.com/v8-deep-dives-random-thoughts-on-math-random-fb155075e9e5'
}, {
    name: 'In-the-Wild Series: Chrome Infinity Bug',
    href: 'https://googleprojectzero.blogspot.com/2021/01/in-wild-series-chrome-infinity-bug.html'
}]
