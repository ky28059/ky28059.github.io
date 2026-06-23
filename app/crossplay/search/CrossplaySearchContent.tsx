'use client'

import { useEffect, useMemo, useState } from 'react';


export default function CrossplaySearchContent() {
    const [query, setQuery] = useState('');
    const [words, setWords] = useState<string[] | null>(null);

    useEffect(() => {
        fetch('/assets/NWL2023_words.txt')
            .then(res => res.text())
            .then(s => setWords(s.split('\n')));
    }, []);

    const filtered = useMemo(() => {
        if (!words) return [];
        return words
            .filter((w) => w.toLowerCase().startsWith(query.toLowerCase()))
            .slice(0, 100);
    }, [query, words]);

    return (
        <div className="w-full">
            <input
                className="px-3 py-1.5 rounded border border-tertiary w-full mb-4"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search words"
            />

            <div className="flex flex-col gap-0.5">
                {!words ? (
                    <>loading...</> // TODO
                ) : filtered.map((w) => (
                    <div key={w}>
                        {w}
                    </div>
                ))}
            </div>
        </div>
    )
}
