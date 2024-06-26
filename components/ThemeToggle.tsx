'use client'

import { BiSun } from 'react-icons/bi';


export default function ThemeToggle(props: { className?: string }) {
    const toggleTheme = () => document.documentElement.classList.toggle('dark');
    return (
        <button onClick={toggleTheme} className={props.className}>
            <BiSun />
        </button>
    )
}
