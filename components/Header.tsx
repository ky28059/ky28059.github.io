import {useState} from 'react';
//import Image from 'next/image';
import HeaderItem from './HeaderItem';

// Icons
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
//import pfp from '../public/pfp.png';
const pfp = '/pfp.png';


export default function Header() {
    const [open, setOpen] = useState(true);

    return (
        <header className={`sticky top-0 bg-gray-800 bg-opacity-90 shadow-md backdrop-blur-sm z-50 h-20 ${!open ? 'h-10' : ''} flex`}>
            <div className={`flex flex-grow items-center h-full ${!open ? 'hidden' : ''}`}>
                <a href="https://github.com/ky28059">
                    <img src={pfp} alt="Profile" className="rounded-full" height={50} width={50}/>
                </a>
                <h1 className="text-3xl font-bold ml-4 mr-8">ky28059</h1>

                <HeaderItem to="/" name="Home" exact />
            </div>
            {open
                ? <MdExpandLess className="my-auto ml-auto" onClick={() => setOpen(x => !x)}/>
                : <MdExpandMore className="my-auto ml-auto" onClick={() => setOpen(x => !x)}/>}
        </header>
    )
}
