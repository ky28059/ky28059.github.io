import type { Metadata } from 'next';
import Link from 'next/link';

// Components
import { SectionHeading } from '@/components/Section';
import WriteupsContent from './WriteupsContent';

// Utils
import { ctfs } from './ctfs';


export const metadata: Metadata = {
    title: 'CTF Writeups',
    description: 'An incomplete list of challenge writeups for CTFs I participated in on team b01lers at Purdue.'
}

export default async function Writeups() {
    const categoryCounts: { [c: string]: number } = {};
    const tagCounts: { [t: string]: number } = {};

    const writeupDescriptions: { [n: string]: string } = {};

    // Calculate category and tag counts, prefetch gist descriptions on the server
    for (const w of ctfs.flatMap((c) => c.writeups)) {
        const raw = await (await fetch(`${w.href}/raw`)).text();
        writeupDescriptions[w.name] = raw.match(/> (.+)/)![1];

        if (w.type) {
            if (!categoryCounts[w.type]) categoryCounts[w.type] = 0;
            categoryCounts[w.type]++;
        }

        if (!w.tags) continue;
        w.tags.forEach((tag) => {
            if (!tagCounts[tag]) tagCounts[tag] = 0;
            tagCounts[tag]++;
        });
    }

    return (
        <>
            <Link href="/" className="text-secondary text-sm mb-10 -ml-5 block w-max">
                ← Back to home
            </Link>

            <SectionHeading>CTF Writeups</SectionHeading>

            <WriteupsContent
                categoryCounts={categoryCounts}
                tagCounts={tagCounts}
                writeupDescriptions={writeupDescriptions}
            />
        </>
    )
}
