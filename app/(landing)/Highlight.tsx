import type { ReactNode } from 'react';
import ProjectTag from '@/app/(landing)/ProjectTag';
import { LanguageKey, ProjectLang } from '@/app/(landing)/Project';
import { BsGithub } from 'react-icons/bs';


type HighlightProps = {
    name: string,
    date: string,
    tags: string[],
    langs: LanguageKey[],
    gh: string,
    flipped?: boolean,
    content: ReactNode,
    children: ReactNode
}

export default function Highlight(props: HighlightProps) {
    return (
        <section className={'flex flex-col gap-x-20 gap-y-10 mt-24 ' + (props.flipped ? 'md:flex-row-reverse' : 'md:flex-row')}>
            <div className={'relative w-lg flex-none ' + (props.flipped ? 'md:-mr-12' : 'md:-ml-12')}>
                {props.content}
            </div>

            <div className="w-full">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-2xl font-bold">
                        {props.name}
                    </h2>

                    <p className="text-primary text-xl">
                        {props.date}
                    </p>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                    {props.tags.map((tag) => (
                        <ProjectTag key={tag}>
                            {tag}
                        </ProjectTag>
                    ))}
                </div>
                <div className="text-2xl">
                    <a
                        className="text-inherit hover:no-underline"
                        href={props.gh}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsGithub />
                    </a>
                </div>

                <div className="text-primary mt-6">
                    {props.children}
                </div>
                <div className="flex gap-1 flex-wrap mt-6">
                    {props.langs.map(lang => <ProjectLang lang={lang} key={lang} />)}
                </div>
            </div>
        </section>
    )
}
