'use client'

import { ReactNode, useState } from 'react';
import AutoResizingTextArea from '@/components/AutoResizingTextArea';


export default function ConvertorInputs() {
    const [input, setInput] = useState('To the red country and part of the gray country of Oklahoma, the last rains came gently and they did not cut the scarred earth.');

    return (
        <div className="flex gap-8 xl:gap-12 flex-wrap lg:flex-nowrap">
            <section className="flex-grow basis-1/2">
                <p className="text-sm mb-1 text-gray-400 dark:text-gray-100/40">Input</p>
                <AutoResizingTextArea
                    placeholder="Type input..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="rounded px-3 py-1 h-24 dark:bg-[#2b2b2b] mb-2 w-full border border-gray-400/50 dark:border-gray-100/10 placeholder:text-gray-400 placeholder:dark:text-gray-100/40"
                />
                <p className="text-xs mb-1 text-gray-400 dark:text-gray-100/40">
                    Length: {input.length} characters | {input.length && input.trim().split(/\s+/).length} words
                </p>
            </section>

            <section className="flex-grow basis-1/2 flex flex-col gap-2 min-w-0">
                <LabelledOutput label="Plain text">
                    {input}
                </LabelledOutput>
                <LabelledOutput label="Capitalized">
                    {input.toUpperCase()}
                </LabelledOutput>
                <LabelledOutput label="Lowercase">
                    {input.toLowerCase()}
                </LabelledOutput>
                <LabelledOutput label="Alternating case">
                    {alternatingCase(input)}
                </LabelledOutput>
                <LabelledOutput label="rot13">
                    {rot(input, 13)}
                </LabelledOutput>
                {/* TODO: arbitrary rot value */}
                <LabelledOutput label="Reversed">
                    {reverse(input)}
                </LabelledOutput>
                <LabelledOutput label="Upside down (reversed)">
                    {reverse(upsideDown(input))}
                </LabelledOutput>
                <LabelledOutput label="Upside down">
                    {upsideDown(input)}
                </LabelledOutput>
                <LabelledOutput label="To base64">
                    {btoa(input)}
                </LabelledOutput>
                <LabelledOutput label="To hex bytes">
                    {[...input].map((s) => s.charCodeAt(0).toString(16)).join(' ')}
                </LabelledOutput>
                <LabelledOutput label="To hex bytes (escape sequence)">
                    {[...input].map((s) => '\\x' + s.charCodeAt(0).toString(16)).join('')}
                </LabelledOutput>
                <LabelledOutput label="To octal bytes">
                    {[...input].map((s) => s.charCodeAt(0).toString(8)).join(' ')}
                </LabelledOutput>
                <LabelledOutput label="To octal bytes (escape sequence)">
                    {[...input].map((s) => '\\' + s.charCodeAt(0).toString(8)).join('')}
                </LabelledOutput>
            </section>
        </div>
    )
}

function LabelledOutput(props: {label: string, children: ReactNode}) {
    return (
        <div>
            <p className="text-sm mb-1 text-gray-400 dark:text-gray-100/40">{props.label}</p>
            <div className="whitespace-pre-wrap break-words rounded px-3 py-1 dark:bg-[#2b2b2b] mb-3 w-full border border-gray-400/50 dark:border-gray-100/10 placeholder:text-gray-400 placeholder:dark:text-gray-100/40">
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

const flipTable: {[key: string]: string} = {
    'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l',
    'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
    'y': 'ʎ', 'z': 'z',
    'A': '∀', 'B': '𐐒', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ꓘ', 'L': '˥',
    'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Ỏ', 'R': 'ᴚ', 'S': 'S', 'T': '┴', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X',
    'Y': '⅄', 'Z': 'Z',
    ',': '\'', '.': '˙', '?': '¿', '!': '¡', '"': ',,', '\'': ',', '`': ',', '&': '⅋', '_': '‾',
    '(': ')', ')': '(', '[': ']', ']': '[', '{': '}', '}': '{', '<': '>', '>': '<'
}
