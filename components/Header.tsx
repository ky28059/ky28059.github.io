import {useEffect, useState} from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import {useScroll} from '../util/useScroll';

// Icons
import { MdExpandLess, MdExpandMore } from 'react-icons/md';


export default function Header() {
    const [open, setOpen] = useState(true);
    const scroll = useScroll();

    const ExpandIcon = open ? MdExpandLess : MdExpandMore;

    return (
        <header className={`flex sticky top-0 p-4 bg-white dark:bg-dark text-black dark:text-white bg-opacity-90 ${scroll > 0 ? 'shadow-md' : 'hover:shadow-md'} backdrop-blur-sm z-50 h-20 transition-[box-shadow,_height] duration-300 ease-in-out ${!open ? 'h-10' : ''}`}>
            <div className={`flex items-center gap-4 h-full ${!open ? 'hidden' : ''}`}>
                <a href="https://github.com/ky28059" className="flex gap-4 items-center mr-6 text-inherit hover:no-underline">
                    <img src="/pfp.png" alt="Profile" className="rounded-full" height={50} width={50}/>
                    <h1 className="text-3xl font-bold">ky28059</h1>
                </a>

                <Link href="/">
                    <a className="p-2 text-inherit hover:no-underline">Home</a>
                </Link>
                <Link href="/concepts">
                    <a className="p-2 text-inherit hover:no-underline">Concepts</a>
                </Link>
            </div>
            <div className="flex items-center gap-4 ml-auto text-xl">
                <ThemeToggle className="cursor-pointer" />
                <ExpandIcon className="cursor-pointer" onClick={() => setOpen(x => !x)} />
            </div>
        </header>
    )
}
