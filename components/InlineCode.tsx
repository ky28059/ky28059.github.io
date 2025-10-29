import type { ReactNode } from 'react';


export function InlineCode(props: { children: ReactNode }) {
    return (
        <code className="font-jetbrains opacity-75 bg-black/10 dark:bg-black/30 rounded px-1.5 py-1 text-[0.9em]">
            {props.children}
        </code>
    )
}
