import type {Metadata} from 'next';
import Link from 'next/link';

// Components
import Section, {SectionHeading} from '../../components/Section';

// Utilities
import {readdirSync} from 'fs';
import {resolve} from 'path';


export const metadata: Metadata = {
    title: 'All',
    description: 'A directory of every page on this website.'
}

export default async function All() {
    const paths = await getPaths();

    return (
        <Section>
            <SectionHeading className="underline decoration-grapefruit">All</SectionHeading>
            <p className="mb-8 max-w-prose">
                This page was automatically generated at build time by recursively parsing TSX files and subdirectories
                in <code>./app</code>. Accordingly, not all dynamic paths (<code>[path]</code>) may be valid.
            </p>

            <section className="flex flex-col gap-2">
                {paths.map(path => (
                    <Link href={path} className="text-gray-400" key={path}>
                        {path}
                    </Link>
                ))}
            </section>
        </Section>
    )
}

// Recursively fetch all files in `./app`, standardizing slashes, filtering for `page.tsx`, normalizing absolute paths
// to relative paths, and mapping the file name to the generated path.
async function getPaths() {
    return (await getFiles('./app'))
        .map(file => file.replaceAll('\\', '/'))
        .map(file => file.match(/.+\/app(\/.*?)\/page\.tsx/)?.[1])
        .filter((file): file is string => !!file) // TODO: perhaps a bit hacky
        .map(path => path.replaceAll(/\(.+?\)\/?|(?<!^)\/\(.+?\)$/g, ''))
        .sort();
}

// Recursively searches a directory for all nested files.
// https://stackoverflow.com/a/45130990
async function getFiles(dir: string): Promise<string[]> {
    const dirents = readdirSync(dir, { withFileTypes: true });
    const files = await Promise.all(dirents.map((dirent) => {
        const res = resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : res;
    }));
    return files.flat();
}
