'use client'

import type { ReactNode } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

// Icons
import { PiFlagPennantFill } from 'react-icons/pi';
import { HiChevronDown } from 'react-icons/hi2';
import { BiSubdirectoryRight } from 'react-icons/bi';


type CTFProps = {
    name: string,
    children: ReactNode
}
export default function CTF(props: CTFProps) {
    return (
        <Disclosure as="div" defaultOpen className="-ml-3">
            <DisclosureButton className="relative flex items-center rounded px-3 py-1 w-full mb-3 text-left text-primary hover:text-black dark:hover:text-white bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition duration-200">
                <PiFlagPennantFill className="absolute -left-6 text-grapefruit mt-0.5" />
                <h3>{props.name}</h3>

                <HiChevronDown className='ml-auto size-5 p-1 rounded-full bg-black/5 dark:bg-white/5 transition-transform duration-200 rotate-180 ui-open:rotate-0' />
            </DisclosureButton>

            <DisclosurePanel as="ol" className="flex flex-col gap-1.5 pl-3">
                {props.children}
            </DisclosurePanel>
        </Disclosure>
    )
}

type ChallType = 'misc' | 'web' | 'crypto' | 'pwn' | 'rev' | 'osint' | 'apk' | 'forensics'

export type WriteupData = {
    href: string,
    type?: ChallType,
    src?: string,
    name: string,
    tags?: string[]
}
export function Writeup(props: WriteupData) {
    return (
        <a
            className="group flex gap-5 relative font-mono border rounded overflow-clip hover:no-underline text-primary hover:text-black dark:hover:text-white border-white/25 hover:border-white/50 transition duration-150"
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {props.src ? (
                <img
                    className="w-36 h-20 object-cover object-center flex-none bg-white"
                    src={props.src}
                    alt={props.name}
                />
            ) : (
                <div className="w-36 h-20 bg-black/30 flex-none" />
            )}

            <div className="py-3.5">
                <p className="mb-0.5">
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

                <div className="flex gap-1">
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
            </div>
        </a>
    )
}
