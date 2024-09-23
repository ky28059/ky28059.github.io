type ChallType = 'misc' | 'web' | 'crypto' | 'pwn' | 'rev' | 'osint' | 'apk' | 'forensics'

export type WriteupData = {
    href: string,
    type?: ChallType,
    src?: string,
    name: string,
    tags?: string[]
}
export default function Writeup(props: WriteupData & { desc: string }) {
    return (
        <a
            className="group flex gap-5 relative border rounded overflow-clip hover:no-underline text-primary hover:text-black dark:hover:text-white border-white/25 hover:border-white/50 transition duration-150"
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {props.src ? (
                <img
                    className="w-36 h-20 object-cover object-center flex-none bg-black/30"
                    src={props.src}
                    alt={props.name}
                />
            ) : (
                <div className="w-36 h-20 bg-black/30 flex-none" />
            )}

            <div className="py-3.5 pr-4">
                <div className="flex gap-1 items-center font-mono mb-1">
                    <p className="font-mono mr-2.5">
                        {props.type && (
                            <span className="text-secondary">
                                {props.type}
                            </span>
                        )}
                        {props.type && (
                            <span className="text-tertiary mx-0.5">/</span>
                        )}
                        {props.name}
                    </p>

                    {props.type && (
                        <span className="select-none px-1.5 py-0.5 text-xs rounded-full bg-grapefruit/30 text-grapefruit font-semibold">
                            {props.type}
                        </span>
                    )}
                    {props.tags && props.tags.map((s) => (
                        <span
                            className="select-none px-1.5 py-0.5 text-xs rounded-full bg-grapefruit/30 text-grapefruit font-semibold"
                            key={s}
                        >
                            {s}
                        </span>
                    ))}
                </div>

                <p className="text-secondary text-xs line-clamp-1">
                    {'>'} {props.desc}
                </p>
            </div>
        </a>
    )
}
