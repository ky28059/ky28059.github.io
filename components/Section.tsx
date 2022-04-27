import {ReactNode} from 'react';


export default function Section(props: {children: ReactNode, secondary?: boolean}) {
    return (
        <section className={`${props.secondary ? 'bg-gray-100 dark:bg-dark' : 'bg-white dark:bg-midnight'} py-8`}>
            <div className="container">
                {props.children}
            </div>
        </section>
    )
}

export function SectionHeader(props: {children: ReactNode, className?: string}) {
    return (
        <h1 className={'text-5xl font-bold' + (props.className ? ` ${props.className}` : '')}>
            {props.children}
        </h1>
    )
}
