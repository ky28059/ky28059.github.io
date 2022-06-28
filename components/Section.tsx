import {ReactNode} from 'react';


export default function Section(props: {children: ReactNode, secondary?: boolean, className?: string}) {
    return (
        <section className={'py-8 my-4 ' + (props.secondary ? 'bg-gray-100 dark:bg-dark' : 'bg-white dark:bg-midnight')}>
            <div className={'container' + (props.className ? ` ${props.className}` : '')}>
                {props.children}
            </div>
        </section>
    )
}

export function SectionHeading(props: {children: ReactNode, className?: string}) {
    return (
        <h1 className={'text-5xl font-bold mb-6' + (props.className ? ` ${props.className}` : '')}>
            {props.children}
        </h1>
    )
}
