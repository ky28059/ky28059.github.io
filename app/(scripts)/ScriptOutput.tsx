'use client'

import { SyntaxHighlighter } from '../../components/CodeBlock';


type ScriptOutputProps = {
    className?: string,
    children: string,
    language?: string
}
export default function ScriptOutput(props: ScriptOutputProps) {
    return (
        <>
            <p className="text-sm mb-1 text-secondary dark:text-secondary-dark">
                Code:{' '}
                {/* TODO: animate this with a popup or something */}
                <button onClick={() => navigator.clipboard.writeText(props.children)} className="hover:underline">
                    (copy)
                </button>
            </p>
            <div className={'rounded-lg overflow-hidden text-xs' + (props.className ? ` ${props.className}` : '')}>
                <SyntaxHighlighter language={props.language ?? 'javascript'}>
                    {props.children}
                </SyntaxHighlighter>
            </div>
        </>
    )
}
