'use client'

import { useEffect, useMemo, useState } from 'react';
import CrossplayWord from '@/app/crossplay/search/CrossplayWord';


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
        return words.filter((w) => w.toLowerCase().startsWith(query.toLowerCase()));
    }, [query, words]);

    return (
        <div className="w-full">
            <input
                className="px-3 py-1.5 rounded border border-tertiary w-full mb-1"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search words"
            />
            <p className="text-secondary text-xs mb-3">
                Showing {Math.min(100, filtered.length)} of {filtered.length} words.
            </p>

            <div className="flex flex-col gap-0.5">
                {!words ? (
                    <>loading...</> // TODO
                ) : filtered.length === 0 ? (
                    <p className="text-secondary text-sm">
                        No matches for query {query}.
                    </p>
                ) : filtered.slice(0, 100).map((w) => (
                    <CrossplayWord key={w} word={w} />
                ))}
            </div>
        </div>
    )
}
