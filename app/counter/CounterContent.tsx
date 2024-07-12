'use client'

import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';


export default function CounterContent() {
    const [count, setCount] = useState(0);

    return (
        <>
            <button
                className="fixed text-8xl flex justify-center items-center text-tertiary dark:text-tertiary-dark hover:text-secondary dark:hover:text-secondary-dark w-full h-[50vh] top-0 hover:bg-tertiary/20 dark:hover:bg-tertiary-dark/20 transition duration-200"
                onClick={() => setCount((c) => c + 1)}
            >
                <FiChevronUp />
            </button>
            <h1 className="text-9xl font-mono z-50 pointer-events-none">
                {count}
            </h1>
            <button
                className="fixed text-8xl flex justify-center items-center text-tertiary dark:text-tertiary-dark hover:text-secondary dark:hover:text-secondary-dark w-full h-[50vh] bottom-0 hover:bg-tertiary/20 dark:hover:bg-tertiary-dark/20 transition duration-200"
                onClick={() => setCount((c) => c - 1)}
            >
                <FiChevronDown />
            </button>
        </>
    )
}
