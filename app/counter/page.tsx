import type { Metadata } from 'next';
import CounterContent from './CounterContent';


export const metadata: Metadata = {
    title: 'Counter',
    description: 'Simple counter for the 21 points icebreaker.'
}

export default function Counter() {
    return (
        <div className="h-screen flex items-center justify-center">
            <CounterContent />
        </div>
    )
}
