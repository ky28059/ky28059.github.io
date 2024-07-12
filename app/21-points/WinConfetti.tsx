'use client'

import { useIsMounted } from '../../hooks/useIsMounted';
import Confetti from 'react-confetti';


export default function WinConfetti() {
    const mounted = useIsMounted()
    if (!mounted) return null;

    return (
        <Confetti
            initialVelocityX={{ min: -4, max: 4 }}
            initialVelocityY={{ min: 1, max: 4 }}
            recycle={false}
            style={{ position: 'fixed' }}
        />
    )
}
