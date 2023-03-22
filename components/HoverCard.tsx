import {ReactNode} from 'react';


export default function HoverCard(props: {children: ReactNode, href: string}) {
    return (
        <div className="relative flex flex-col px-6 py-5 shadow-lg bg-gray-50 dark:bg-dark rounded-md transform hover:scale-105 transition transition-transform duration-150 w-72">
            <a href={props.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0" />
            {props.children}
        </div>
    )
}
