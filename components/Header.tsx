'use client'

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useScroll } from '../hooks/useScroll';


export default function Header() {
    const scroll = useScroll();

    return (
        <header className={`flex sticky top-0 px-8 py-2.5 bg-white dark:bg-midnight text-black dark:text-white bg-opacity-90 ${scroll > 0 ? 'shadow-md' : 'hover:shadow-md'} backdrop-blur-sm z-50 h-20 transition-[box-shadow,height] duration-300 ease-in-out`}>
            <nav className="flex items-center gap-3 h-full">
                <Link href="/" className="flex gap-4 items-center mr-3 text-inherit hover:no-underline">
                    <img src="/pfp.png" alt="Profile" className="rounded-full h-10 w-10" />
                    <h1 className="text-2xl font-bold">ky28059</h1>
                </Link>

                <Link href="/all" className="p-2 text-inherit hover:no-underline">Directory</Link>
                <Link href="/concepts" className="p-2 text-inherit hover:no-underline">Concepts</Link>
            </nav>
            <div className="flex items-center gap-4 ml-auto text-xl">
                {/* TODO: wrapper div necessary anymore? */}
                <ThemeToggle />
            </div>
        </header>
    )
}
