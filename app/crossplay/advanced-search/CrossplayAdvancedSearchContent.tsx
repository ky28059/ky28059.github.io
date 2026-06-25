'use client'

import { useEffect, useMemo, useState } from 'react';
import CrossplayWord from '@/app/crossplay/search/CrossplayWord';
import { crossplayScore } from '@/app/crossplay/utils';


export default function CrossplayAdvancedSearchContent() {
    const [query, setQuery] = useState('');
    const [startsWith, setStartsWith] = useState('');
    const [endsWith, setEndsWith] = useState('');
    const [contains, setContains] = useState('');

    const [words, setWords] = useState<string[] | null>(null);

    useEffect(() => {
        fetch('/assets/NWL2023_words.txt')
            .then(res => res.text())
            .then(s => setWords(s.split('\n')));
    }, []);

    const filtered = useMemo(() => {
        if (!words) return [];

        let prelim = words;
        if (startsWith) prelim = prelim.filter((w) => w.toLowerCase().startsWith(startsWith.toLowerCase()));
        if (endsWith) prelim = prelim.filter((w) => w.toLowerCase().endsWith(endsWith.toLowerCase()));
        if (contains) prelim = prelim.filter((w) => w.toLowerCase().includes(contains.toLowerCase()));

        return prelim
            .filter((w) => canCreateWord(w, query))
            .sort((a, b) => b.length - a.length || crossplayScore(b) - crossplayScore(a));
    }, [contains, endsWith, query, startsWith, words]);

    return (
        <div className="w-full">
            <input
                className="text-sm px-3 py-2 rounded border border-tertiary w-full mb-1.5"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Available letters (? for wildcard)"
            />
            <div className="grid grid-cols-3 gap-2 mb-1 text-sm">
                <input
                    className="px-3 py-1.5 rounded border border-tertiary w-full"
                    type="text"
                    value={startsWith}
                    onChange={(e) => setStartsWith(e.target.value)}
                    placeholder="Starts with"
                />
                <input
                    className="px-3 py-1.5 rounded border border-tertiary w-full"
                    type="text"
                    value={endsWith}
                    onChange={(e) => setEndsWith(e.target.value)}
                    placeholder="Ends with"
                />
                <input
                    className="px-3 py-1.5 rounded border border-tertiary w-full"
                    type="text"
                    value={contains}
                    onChange={(e) => setContains(e.target.value)}
                    placeholder="Contains"
                />
            </div>
            <p className="text-secondary text-xs mb-3">
                Showing {Math.min(100, filtered.length)} of {filtered.length} words.
            </p>

            <div className="flex flex-col gap-0.5">
                {!words ? (
                    <>loading...</> // TODO
                ) : filtered.length === 0 ? (
                    <p className="text-secondary text-sm">
                        No matches for letters {query}.
                    </p>
                ) : filtered.slice(0, 100).map((w) => (
                    <CrossplayWord key={w} word={w} />
                ))}
            </div>
        </div>
    )
}

function canCreateWord(word: string, tiles: string) {
    const letterCounts: Record<string, number> = {};
    let wildcards = 0;

    for (const tile of tiles.toUpperCase()) {
        if (tile === '?') {
            wildcards++;
        } else if (/[A-Z]/.test(tile)) {
            letterCounts[tile] = (letterCounts[tile] ?? 0) + 1;
        }
    }

    for (const letter of word.toUpperCase()) {
        if (!/[A-Z]/.test(letter)) continue;

        if (letterCounts[letter]) {
            letterCounts[letter]--;
        } else if (wildcards > 0) {
            wildcards--;
        } else {
            return false;
        }
    }

    return true;
}
