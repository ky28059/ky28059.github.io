import type { ReactNode } from 'react';


export default function ProjectTag(props: { children: ReactNode }) {
    return (
        <span className="rounded-full bg-blue-500/20 text-blue-500 dark:text-blue-400 px-2.5 py-0.5 text-xs">
            {props.children}
        </span>
    )
}
