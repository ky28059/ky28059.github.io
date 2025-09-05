import type { ReactNode } from 'react';
import { LanguageKey, ProjectTag } from '@/app/(landing)/Project';


type GistProps = {
    name: string,
    href: string,
    src?: string,
    langs?: LanguageKey[],
    children: ReactNode
}
export default function Gist(props: GistProps) {
    return (
        <div className="group rounded-md overflow-hidden border border-white/25 hover:border-white/50 transition duration-150 relative w-full">
            <a href={props.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" />

            {props.src && (
                <img
                    src={props.src}
                    alt={props.name}
                    className="w-full h-20 object-cover transition duration-150"
                />
            )}

            <div className="px-5 pt-3.5 pb-4">
                <h3 className="font-semibold mb-1">{props.name}</h3>

                {props.langs && (
                    <div className="flex flex-wrap items-center gap-1">
                        {props.langs.map(lang => <ProjectTag lang={lang} key={lang} />)}
                    </div>
                )}

                <p className="text-xs text-primary mt-2">{props.children}</p>
            </div>
        </div>
    )
}
