import {useEffect, useState} from 'react';

// Components
import HeaderItem from './HeaderItem';

// Icons
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import {BiSun} from "react-icons/bi";


export default function Header() {
    const [open, setOpen] = useState(true);

    const [scroll, setScroll] = useState(0);
    const toggleTheme = () => document.documentElement.classList.toggle('dark');

    useEffect(() => {
        setScroll(window.scrollY);
        document.onscroll = () => setScroll(window.scrollY);
    }, []);

    return (
        <header className={`flex sticky top-0 p-4 bg-white dark:bg-gray-800 text-black dark:text-white bg-opacity-90 ${scroll > 0 ? 'shadow-md' : 'hover:shadow-md'} backdrop-blur-sm z-50 h-20 transition-shadow duration-300 ease-in-out ${!open ? 'h-10' : ''}`}>
            <div className={`flex flex-grow items-center h-full ${!open ? 'hidden' : ''}`}>
                <a href="https://github.com/ky28059">
                    <img src="/pfp.png" alt="Profile" className="rounded-full" height={50} width={50}/>
                </a>
                <h1 className="text-3xl font-bold ml-4 mr-8">ky28059</h1>

                <HeaderItem to="/" name="Home" />
                <HeaderItem to="/concepts" name="Concepts" />
            </div>
            <div className="flex items-center text-xl gap-4">
                <BiSun onClick={toggleTheme}/>
                {open ? (
                    <MdExpandLess onClick={() => setOpen(x => !x)}/>
                ) : (
                    <MdExpandMore onClick={() => setOpen(x => !x)}/>
                )}
            </div>
        </header>
    )
}
