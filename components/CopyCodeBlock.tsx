'use client'

import SyntaxHighlighter from '@/components/SyntaxHighlighter';

// Icons
import {
    SiGnubash,
    SiGo,
    SiHtml5,
    SiJavascript,
    SiKotlin,
    SiPerl,
    SiPython,
    SiTypescript,
    SiYaml
} from 'react-icons/si';
import { TbJson } from 'react-icons/tb';
import { MdDifference } from 'react-icons/md';


type ScriptOutputProps = {
    className?: string,
    children: string,
    language?: string
}
export default function CopyCodeBlock(props: ScriptOutputProps) {
    const Icon = languageToIcon(props.language);

    return (
        <div className={'border border-white/10 rounded-lg' + (props.className ? ` ${props.className}` : '')}>
            <p className="flex items-center text-xs rounded-t-lg px-3 py-0.5 text-secondary">
                {Icon ? (
                    <><Icon className="text-sm mr-1.5" /> {props.language}</>
                ) : (
                    <>Code{props.language && ` (${props.language})`}</>
                )}

                {/* TODO: animate this with a popup or something */}
                <button
                    onClick={() => navigator.clipboard.writeText(props.children)}
                    className="ml-auto hover:underline"
                >
                    (copy)
                </button>
            </p>
            <div className="rounded-b-lg overflow-hidden text-xs">
                <SyntaxHighlighter language={props.language}>
                    {props.children}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

function languageToIcon(language?: string) {
    if (!language) return null;

    switch (language) {
        case 'js':
        case 'javascript':
            return SiJavascript;

        case 'ts':
        case 'typescript':
            return SiTypescript;

        case 'py':
        case 'python':
            return SiPython;

        case 'kt':
        case 'kotlin':
            return SiKotlin;

        case 'html':
            return SiHtml5;

        case 'perl':
            return SiPerl;

        case 'json': return TbJson;

        case 'yml':
        case 'yaml':
            return SiYaml;

        case 'sh':
        case 'bash':
            return SiGnubash;

        case 'diff':
            return MdDifference;

        case 'go': return SiGo;
    }

    return null;
}
