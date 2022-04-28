import {ReactNode} from 'react';


export default function HoverCard(props: {children: ReactNode}) {
    return (
        <div className="flex flex-col p-4 gap-3 shadow-lg bg-white dark:bg-dark rounded-md transform hover:scale-110 transition transition-transform duration-150 w-64">
            {props.children}
        </div>
    )
}
