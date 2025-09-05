import type { ReactNode } from 'react';


type HighlightProps = {
    name: string,
    date: string,
    children: ReactNode
}

export default function Highlight(props: HighlightProps) {
    return (
        <section className="flex gap-12 my-20">
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
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">
                        {props.name}
                    </h2>

                    <p className="text-primary text-xl">
                        {props.date}
                    </p>
                </div>

                <div className="text-sm text-primary mt-6">
                    {props.children}
                </div>
            </div>
        </section>
    )
}
