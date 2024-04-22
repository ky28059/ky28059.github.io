import type { ReactNode } from 'react';


export default function HoverCard(props: { children: ReactNode, href: string }) {
    return (
        <div className="relative flex flex-col px-6 py-4 shadow bg-gray-50 dark:bg-dark border border-tertiary dark:border-tertiary-dark rounded-md transform hover:scale-105 transition-transform duration-150 w-[19rem]">
            <a href={props.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0" />
            {props.children}
        </div>
    )
}
