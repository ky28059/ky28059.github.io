import React, {useState} from 'react';
import HeaderItem from './HeaderItem';

// Icons
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import pfp from '../../assets/pfp.png';


const Header = () => {
    const [open, setOpen] = useState(true);

    return (
        <header className={open ? "" : "hidden"}>
            <a href="https://github.com/ky28059">
                <img src={pfp} alt="Profile"/>
            </a>
            <h1>ky28059</h1>
            <HeaderItem to="/" name="Home" exact />
            <HeaderItem to="/word-gen" name="Word Generator" />

            {
                open
                ? <MdExpandLess className="item toggler" onClick={() => setOpen(x => !x)}/>
                : <MdExpandMore className="item toggler" onClick={() => setOpen(x => !x)}/>
            }
        </header>
    )
}

export default Header;