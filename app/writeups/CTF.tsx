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
        <Disclosure as="div" defaultOpen>
            <DisclosureButton className="relative flex items-center rounded px-3 py-1 w-full mb-1 text-left text-primary dark:text-primary-dark hover:text-black dark:hover:text-white bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition duration-200">
                <PiFlagPennantFill className="absolute -left-6 text-grapefruit mt-0.5" />
                <h3>{props.name}</h3>

                <HiChevronDown className='ml-auto size-5 p-1 rounded-full bg-black/5 dark:bg-white/5 transition-transform duration-200 rotate-180 ui-open:rotate-0' />
            </DisclosureButton>

            <DisclosurePanel as="ol" className="flex flex-col pl-6">
                {props.children}
            </DisclosurePanel>
        </Disclosure>
    )
}

type ChallType = 'misc' | 'web' | 'crypto' | 'pwn' | 'rev' | 'osint' | 'apk' | 'forensics'

export type WriteupData = {
    href: string,
    type?: ChallType,
    name: string
}
export function Writeup(props: WriteupData) {
    return (
        <li className="group relative font-mono">
            <BiSubdirectoryRight className="absolute -left-7 text-xl inset-y-0 my-auto text-secondary dark:text-secondary-dark group-hover:text-primary dark:group-hover:text-primary-dark" />

            <a href={props.href} target="_blank" rel="noopener noreferrer">
                {props.name}
            </a>
            {props.type && (
                <span className="ml-1.5 select-none px-1.5 py-0.5 text-xs rounded-full bg-grapefruit/30 text-grapefruit font-semibold hover:no-underline">
                    {props.type}
                </span>
            )}
        </li>
    )
}
