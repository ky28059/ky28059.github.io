'use client'

import { SyntaxHighlighter } from './CodeBlock';


type ScriptOutputProps = {
    className?: string,
    children: string,
    language?: string
}
export default function CopyCodeBlock(props: ScriptOutputProps) {
    return (
        <div className={props.className}>
            <p className="text-xs bg-black/10 rounded-t-lg px-4 py-0.5 text-secondary">
                Code{props.language && ` (${props.language})`}:{' '}
                {/* TODO: animate this with a popup or something */}
                <button onClick={() => navigator.clipboard.writeText(props.children)} className="hover:underline">
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
