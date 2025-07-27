'use client'

import Confetti from 'react-confetti';
import { useIsMounted } from '@/hooks/useIsMounted';


export default function WinConfetti() {
    const mounted = useIsMounted()
    if (!mounted) return null;

    return (
        <Confetti
            initialVelocityX={{ min: -4, max: 4 }}
            initialVelocityY={{ min: 1, max: 4 }}
            recycle={false}
            style={{ position: 'fixed', width: 'max(1504px, 100vw)', height: '100vh', zIndex: 60 }}
        />
    )
}
