'use client'

import { ReactNode, useState } from 'react';
import AutoResizingTextArea from '@/components/AutoResizingTextArea';


export default function ConvertorInputs() {
    const [input, setInput] = useState('To the red country and part of the gray country of Oklahoma, the last rains came gently and they did not cut the scarred earth.');

    const [query, setQuery] = useState('');

    const filtered = convertors.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()));

    return (
        <div className="flex gap-8 xl:gap-12 flex-wrap lg:flex-nowrap">
            <section className="grow basis-1/3 lg:sticky lg:top-8 h-max">
                <p className="text-sm mb-1 text-gray-400 dark:text-gray-100/40">Input</p>
                <AutoResizingTextArea
                    placeholder="Input sentence..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="rounded px-3 py-1 h-24 dark:bg-[#2b2b2b] w-full border border-gray-400/50 dark:border-gray-100/10 placeholder:text-gray-400 placeholder:dark:text-gray-100/40"
                />
                <p className="text-xs mt-2 mb-6 text-gray-400 dark:text-gray-100/40">
                    Length: {input.length} characters | {input.length && input.trim().split(/\s+/).length} words
                </p>

                <h2 className="text-sm font-semibold mb-1">Filter converters:</h2>
                <input
                    className="w-full dark:bg-[#2b2b2b] px-3 py-1.5 border border-tertiary rounded"
                    placeholder="Search convertors..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <p className="text-xs mt-2 text-gray-400 dark:text-gray-100/40">
                    Showing {filtered.length} of {convertors.length} convertors.
                </p>
            </section>

            <section className="grow basis-2/3 flex flex-col gap-2 min-w-0">
                {filtered.map(({ name, transform, mono }) => (
                    <LabelledOutput label={name} key={name} mono={mono}>
                        {transform(input)}
                    </LabelledOutput>
                ))}
            </section>
        </div>
    )
}

type ConvertorData = {
    name: string,
    transform: (s: string) => string,
    mono?: boolean
}

const convertors: ConvertorData[] = [{
    name: 'Plain text',
    transform: (s) => s
}, {
    name: 'Uppercase',
    transform: (s) => s.toUpperCase(),
}, {
    name: 'Lowercase',
    transform: (s) => s.toLowerCase(),
}, {
    name: 'Alternating case',
    transform: alternatingCase
}, {
    name: 'rot13',
    transform: (s) => rot(s, 13)
}, {
    name: 'Reversed',
    transform: (s) => reverse(s)
}, {
    name: 'Upside down (reversed)',
    transform: (s) => reverse(upsideDown(s))
}, {
    name: 'Upside down',
    transform: (s) => upsideDown(s)
}, {
    name: 'To base64',
    transform: btoa,
    mono: true
}, {
    name: 'To hex bytes',
    transform: (s) => [...s].map((c) => c.charCodeAt(0).toString(16)).join(' '),
    mono: true
}, {
    name: 'To hex bytes (escape sequence)',
    transform: (s) => [...s].map((c) => '\\x' + c.charCodeAt(0).toString(16)).join(''),
    mono: true
}, {
    name: 'To octal bytes',
    transform: (s) => [...s].map((c) => c.charCodeAt(0).toString(8)).join(' '),
    mono: true
}, {
    name: 'To octal bytes (escape sequence)',
    transform: (s) => [...s].map((c) => '\\' + c.charCodeAt(0).toString(8)).join(''),
    mono: true
}, {
    name: 'To binary bytes',
    transform: (s) => [...s].map((c) => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' '),
    mono: true
}, {
    name: 'To unicode',
    transform: (s) => [...s].map((c) => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0')).join(''),
    mono: true
}, {
    name: 'URI encoded',
    transform: encodeURIComponent,
    mono: true
}, {
    name: 'URI encoded (full)',
    transform: (s) => [...s].map((c) => '%' + c.charCodeAt(0).toString(16).padStart(2, '0')).join(''),
    mono: true
}]

function LabelledOutput(props: { label: string, mono?: boolean, children: ReactNode }) {
    return (
        <div>
            <p className="text-sm mb-1 text-gray-400 dark:text-gray-100/40">{props.label}</p>
            <div className={'whitespace-pre-wrap break-words rounded px-3 py-2 dark:bg-[#2b2b2b] mb-3 w-full border border-gray-400/50 dark:border-gray-100/10 placeholder:text-gray-400 placeholder:dark:text-gray-100/40' + (props.mono ? ' font-jetbrains' : '')}>
                {props.children}
            </div>
        </div>
    )
}

function alternatingCase(str: string) {
    let i = 0;
    return [...str].map(c => {
        if (!(/\w/).test(c)) return c; // Don't increment counter on non-letter characters.
        return (++i % 2 == 0) ? c.toUpperCase() : c.toLowerCase();
    }).join('');
}

function rot(str: string, num: number) {
    return [...str].map(c => {
        if (!(/\w/).test(c)) return c; // Don't rotate non-letter characters.
        const capital = c.charCodeAt(0) >= 97;
        const offset = (c.toLowerCase().charCodeAt(0) - 96 + num) % 26 || 26;
        return String.fromCharCode(offset + (capital ? 96 : 64));
    }).join('');
}

function upsideDown(str: string) {
    return [...str].map(c => flipTable[c] ?? c).join('');
}

function reverse(str: string) {
    return [...str].reverse().join('');
}

const flipTable: { [key: string]: string } = {
    'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l',
    'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
    'y': 'ʎ', 'z': 'z',
    'A': '∀', 'B': '𐐒', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ꓘ', 'L': '˥',
    'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Ỏ', 'R': 'ᴚ', 'S': 'S', 'T': '┴', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X',
    'Y': '⅄', 'Z': 'Z',
    ',': '\'', '.': '˙', '?': '¿', '!': '¡', '"': ',,', '\'': ',', '`': ',', '&': '⅋', '_': '‾',
    '(': ')', ')': '(', '[': ']', ']': '[', '{': '}', '}': '{', '<': '>', '>': '<'
}
