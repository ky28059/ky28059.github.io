import {useState, useEffect} from 'react';
import Link from 'next/link';

// Icons
import {BiSun} from 'react-icons/bi';


export default function RabbitSignHeader() {
    const [scroll, setScroll] = useState(0);
    const [loggedIn, setLoggedIn] = useState(false);
    const toggleLogin = () => setLoggedIn(!loggedIn);

    const toggleTheme = () => document.documentElement.classList.toggle('dark');

    useEffect(() => {
        setScroll(window.scrollY);
        document.onscroll = () => setScroll(window.scrollY);
    }, []);

    return (
        <header className={`sticky top-0 bg-white z-50 dark:bg-gray-800 ${scroll > 0 ? 'bg-opacity-90 dark:bg-opacity-90 shadow-md backdrop-blur-sm' : 'hover:bg-opacity-90 dark:hover:bg-opacity-90 hover:shadow-md hover:backdrop-blur-sm'} transition-shadow duration-300 ease-in-out`}>
            <nav className="p-4 flex items-center">
                {/*
                <div id="sidebarCollapse" className="d-md-none">
                    <button id="RabbitSign-navbar-sidebar-closeSidebar-button" className="navbar-toggler"
                            type="button"
                            data-toggle="modal" data-target="#sidebarModal" aria-controls="sidebar"
                            aria-label="Open sidebar"><span className="navbar-toggler-icon"></span></button>
                    <a href="/" className="navbar-brand ml-3">
                        <img src={logo} alt="RabbitSign logo" width="135" height="27"/>
                    </a>
                </div>
                */}
                <Link href="/">
                    <a className="navbar-brand">
                        <img
                            src="/concepts/rabbitsign/logo-cropped.png"
                            alt="RabbitSign logo"
                            width={135}
                            height={27}
                            className="dark:invert"
                        />
                    </a>
                </Link>
                {loggedIn && (
                    <Link href="/dashboard" passHref>
                        <a className="ml-4" title="Dashboard">
                            Dashboard
                        </a>
                    </Link>
                )}
                <Link href="/faq" passHref>
                    <a className="ml-4" title="FAQ">
                        FAQ
                    </a>
                </Link>
                {loggedIn ? <>
                    {/* TODO: these need to be updated and wrapped in <Link> */}
                    <a className="ml-auto cursor-pointer" title="My Account">
                        My Account
                    </a>
                    <a className="sign-out-button ml-4 cursor-pointer" title="Sign Out" onClick={toggleLogin}>
                        Sign Out
                    </a>
                </> : <>
                    {/* The style properties in the following elements are temporary and unideal
                    Overriding the <Row>s negative margins is, however, desired behavior */}
                    <a
                        //href="https://login.rabbitsign.com/signup?client_id=20qopiid2uaflsvki0lde6k5j7&amp;response_type=token&amp;scope=email+openid+profile&amp;redirect_uri=https://www.rabbitsign.com/loginredirect.html"
                        title="Sign Up"
                        className="ml-auto cursor-pointer"
                        onClick={toggleLogin}
                    >
                        Sign Up
                    </a>
                    <a
                        //href="https://login.rabbitsign.com/login?client_id=20qopiid2uaflsvki0lde6k5j7&amp;response_type=token&amp;scope=email+openid+profile&amp;redirect_uri=https://www.rabbitsign.com/loginredirect.html"
                        className="ml-4 cursor-pointer"
                        title="Log In"
                        onClick={toggleLogin}
                    >
                        Log In
                    </a>
                </>}
                <BiSun className="text-lg ml-4 cursor-pointer" onClick={toggleTheme}/>
            </nav>
        </header>
    )
}
