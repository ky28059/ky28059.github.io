import React, {useState} from 'react';
import HeaderItem from './HeaderItem';

// Icons
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import pfp from '../assets/pfp.png';


const Header = (props) => {
    const [open, setOpen] = useState(true);

    return (
        <header className={open ? null : "hidden"}>
            <a href="https://github.com/ky28059">
                <img src={pfp} alt="Profile"/>
            </a>
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