import type { Metadata } from 'next';
import TwentyOnePointsContent from './TwentyOnePointsContent';


export const metadata: Metadata = {
    title: '21 points',
    description: 'Simple counter for the 21 points icebreaker.'
}

export default function Counter() {
    return (
        <div className="h-dvh flex items-center justify-center">
            <TwentyOnePointsContent />
        </div>
    )
}
