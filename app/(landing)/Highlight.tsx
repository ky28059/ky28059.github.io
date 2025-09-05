import type { ReactNode } from 'react';
import ProjectTag from '@/app/(landing)/ProjectTag';
import { BsGithub } from 'react-icons/bs';


type HighlightProps = {
    name: string,
    date: string,
    tags: string[],
    gh: string,
    children: ReactNode
}

export default function Highlight(props: HighlightProps) {
    return (
        <section className="flex gap-12 mt-24">
            <div className="w-[32rem] -ml-8 flex-none">
                <img
                    src="/assets/projects/jumpseat.jpg"
                    className="relative -ml-6 w-[28rem] shadow-lg rounded-lg -rotate-6"
                />
                <img
                    src="/assets/projects/jumpseat2.jpg"
                    className="relative ml-16 -mt-16 w-[28rem] shadow-lg rounded-lg rotate-3"
                />
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
                <div className="flex gap-1 mb-3">
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

                <div className="text-sm text-primary mt-6">
                    {props.children}
                </div>
            </div>
        </section>
    )
}
