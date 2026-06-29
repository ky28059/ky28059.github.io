'use client'

import { useState } from 'react';

// Components
import SyntaxHighlighter from '@/components/SyntaxHighlighter';
import AnimatedTooltip from '@/components/AnimatedTooltip';

// Utils
import { cn } from '@/lib/utils';

// Icons
import {
    SiC,
    SiCss3,
    SiDocker,
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


type CopyCodeBlockProps = {
    className?: string,
    children: string,
    language?: string
}

export default function CopyCodeBlock(props: CopyCodeBlockProps) {
    const Icon = languageToIcon(props.language);

    const [copied, setCopied] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    async function handleCopy() {
        await navigator.clipboard.writeText(props.children);
        setCopied(true);
        setTooltipOpen(true);
    }

    function closeTooltip() {
        setTooltipOpen(false);
        setCopied(false);
    }

    return (
        <div className={cn('border border-white/10 rounded-lg', props.className)}>
            <div className="font-jetbrains flex items-center text-xs rounded-t-lg px-3 py-0.5 text-secondary">
                {Icon ? (
                    <><Icon className="text-sm mr-1.5" /> {props.language}</>
                ) : (
                    <>Code{props.language && ` (${props.language})`}</>
                )}

                {/* TODO: font */}
                <AnimatedTooltip
                    tooltip={copied ? 'Code copied!' : 'Copy code'}
                    side="bottom"
                    open={tooltipOpen}
                    onOpenChange={(open) => {
                        if (open) setTooltipOpen(true);
                    }}
                >
                    <button
                        className="ml-auto hover:underline"
                        onClick={handleCopy}
                        onFocus={() => setTooltipOpen(true)}
                        onBlur={closeTooltip}
                        onMouseEnter={() => setTooltipOpen(true)}
                        onMouseLeave={closeTooltip}
                    >
                        (copy)
                    </button>
                </AnimatedTooltip>
            </div>
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

        case 'css':
            return SiCss3;

        case 'perl':
            return SiPerl;

        case 'json': return TbJson;

        case 'yml':
        case 'yaml':
            return SiYaml;

        case 'sh':
        case 'bash':
            return SiGnubash;

        case 'dockerfile':
            return SiDocker;

        case 'c':
            return SiC;

        case 'diff':
            return MdDifference;

        case 'go': return SiGo;
    }

    return null;
}
