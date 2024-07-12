'use client'

import { ReactElement, useRef, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import WinConfetti from './WinConfetti';


export default function TwentyOnePointsContent() {
    const [count, setCount] = useState(0);
    const [confettiInstances, setConfettiInstances] = useState<ReactElement[]>([]);

    const id = useRef(0);

    function incrementCount() {
        setCount(count + 1);
        id.current++;
        if (count + 1 !== 21) return;

        // Spawn a new confetti instance
        const confettiInstance = <WinConfetti key={id.current} />
        setConfettiInstances([...confettiInstances, confettiInstance])
        setTimeout(() =>
            setConfettiInstances((instances) => instances.filter(instance => instance !== confettiInstance)),
            10000
        );
    }

    return (
        <>
            {confettiInstances}
            <button
                className="fixed text-8xl flex justify-center items-center text-tertiary dark:text-tertiary-dark hover:text-secondary dark:hover:text-secondary-dark w-full h-[50vh] top-0 hover:bg-tertiary/20 dark:hover:bg-tertiary-dark/20 transition duration-200"
                onClick={incrementCount}
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
