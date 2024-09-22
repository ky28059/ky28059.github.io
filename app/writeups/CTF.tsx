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
