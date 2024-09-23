'use client'

import { useMemo, useState } from 'react';

// Components
import CTF from './CTF';
import Writeup from './Writeup';
import FilterCheckbox from './FilterCheckbox';

// Utils
import { ctfs } from './ctfs';


type WriteupsContentProps = {
    categoryCounts: { [c: string]: number },
    tagCounts: { [c: string]: number },
    writeupDescriptions: { [n: string]: string }
}
export default function WriteupsContent(props: WriteupsContentProps) {
    const [categories, setCategories] = useState(new Set<string>());
    const [tags, setTags] = useState(new Set<string>());

    const filtered = useMemo(() => {
        return ctfs.map((c) => ({
            ...c,
            writeups: c.writeups
                .filter((w) => categories.size === 0 || (w.type && categories.has(w.type)))
                .filter((w) => tags.size === 0 || w.tags?.some((t) => tags.has(t)))
        })).filter((c) => c.writeups.length > 0);
    }, [categories, tags]);

    return (
        <div className="flex gap-8 pt-2">
            <section className="flex-grow flex flex-col gap-4 pl-4">
                {filtered.map((c) => (
                    <CTF name={c.name} key={c.name}>
                        {c.writeups.map((w) => (
                            <Writeup
                                {...w}
                                desc={props.writeupDescriptions[w.name]}
                                key={w.name}
                            />
                        ))}
                    </CTF>
                ))}
            </section>

            <aside className="pl-8 py-2 rounded h-max sticky top-8 w-60 flex-none border-l border-tertiary">
                <h2 className="font-semibold mb-2 text-sm">
                    Categories
                </h2>
                {Object.entries(props.categoryCounts).sort(([a,], [b,]) => a.localeCompare(b)).map(([name, count]) => (
                    <FilterCheckbox
                        name={name}
                        key={name}
                        count={count}
                        filter={categories}
                        setFilter={setCategories}
                    />
                ))}

                <h2 className="font-semibold mt-4 mb-2 text-sm">
                    Tags
                </h2>
                {Object.entries(props.tagCounts).sort(([a,], [b,]) => a.localeCompare(b)).map(([name, count]) => (
                    <FilterCheckbox
                        name={name}
                        key={name}
                        count={count}
                        filter={tags}
                        setFilter={setTags}
                    />
                ))}

                <p className="text-secondary text-xs mt-4">
                    Showing {filtered.flatMap(c => c.writeups).length}{' '}
                    of {ctfs.flatMap(c => c.writeups).length} writeups.
                </p>
            </aside>
        </div>
    )
}
