import {ReactNode} from 'react';


export default function HoverCard(props: {children: ReactNode}) {
    return (
        <div className="flex flex-col p-4 shadow-lg bg-gray-50 dark:bg-dark rounded-md transform hover:scale-110 transition transition-transform duration-150 w-[16.75rem]">
            {props.children}
        </div>
    )
}
