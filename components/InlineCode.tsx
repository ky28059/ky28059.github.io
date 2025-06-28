import type { ReactNode } from 'react';


export function InlineCode(props: { children: ReactNode }) {
    return (
        <code className="opacity-75 bg-black/30 rounded p-1">
            {props.children}
        </code>
    )
}
