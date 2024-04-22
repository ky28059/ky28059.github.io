import type { ReactNode } from 'react';


type SectionProps = {
    secondary?: boolean,
    className?: string,
    children: ReactNode
}
export default function Section(props: SectionProps) {
    return (
        <section className={'py-10 my-4 ' + (props.secondary ? 'bg-gray-100 dark:bg-dark' : 'bg-white dark:bg-midnight')}>
            <div className={'container' + (props.className ? ` ${props.className}` : '')}>
                {props.children}
            </div>
        </section>
    )
}

type SectionHeadingProps = {
    className?: string,
    children: ReactNode
}
export function SectionHeading(props: SectionHeadingProps) {
    return (
        <h1 className={'text-4xl font-bold mb-4' + (props.className ? ` ${props.className}` : '')}>
            {props.children}
        </h1>
    )
}
