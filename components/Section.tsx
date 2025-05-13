import type { ReactNode } from 'react';


type SectionProps = {
    type?: 'secondary' | 'dark',
    className?: string,
    children: ReactNode
}
export default function Section(props: SectionProps) {
    const bg =
        props.type === 'secondary' ? 'bg-gray-100 dark:bg-dark'
        : props.type === 'dark' ? 'bg-black/20'
        : 'bg-white dark:bg-midnight';

    return (
        <section className={'py-14 ' + bg}>
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
