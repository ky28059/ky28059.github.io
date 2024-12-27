import type { ReactNode } from 'react';


export function InlineCode(props: { children: ReactNode }) {
    return (
        <code className="text-primary bg-black/20 rounded p-1">
            {props.children}
        </code>
    )
}
