import React, {useState} from 'react';
//import Image from 'next/image';
import HeaderItem from './HeaderItem';

// Icons
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
//import pfp from '../public/pfp.png';
const pfp = '/pfp.png';


export default function Header() {
    const [open, setOpen] = useState(true);

    return (
        <header className={`bg-gray-800 ${!open && "hidden"}`}>
            <a href="https://github.com/ky28059">
                <img src={pfp} alt="Profile" height={50} width={50}/>
            </a>
            <h1 className="text-3xl font-bold ml-4 mr-8">ky28059</h1>

            <HeaderItem to="/" name="Home" exact />
            <HeaderItem to="/word-generator" name="Word Generator" />

            {
                open
                ? <MdExpandLess className="item ml-auto" onClick={() => setOpen(x => !x)}/>
                : <MdExpandMore className="item ml-auto" onClick={() => setOpen(x => !x)}/>
            }
        </header>
    )
}
