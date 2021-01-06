import React from 'react';
import HeaderItem from "./HeaderItem";

const Header = (props) => {
    return (
        <header>
            <HeaderItem to="/" name="Home" exact />
            <HeaderItem to="/name-gen" name="Word Generator" />
        </header>
    )
}

export default Header;