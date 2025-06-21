import type { ReactNode } from 'react';


type GistProps = {
    name: string,
    href: string,
    src: string,
    children: ReactNode
}
export default function Gist(props: GistProps) {
    return (
        <div className="group rounded-md overflow-hidden border border-white/25 hover:border-white/50 transition duration-150 relative w-96">
            <a href={props.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" />

            <img
                src={props.src}
                alt={props.name}
                className="w-full h-20 object-cover transition duration-150"
            />

            <div className="px-5 pt-3.5 pb-4">
                <h3 className="font-semibold mb-2">{props.name}</h3>
                <p className="text-xs text-primary">{props.children}</p>
            </div>
        </div>
    )
}
