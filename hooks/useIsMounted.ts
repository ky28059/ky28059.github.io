import {useLayoutEffect, useState} from 'react';


// A hook that returns true after `useEffect` runs, for displaying placeholders for dynamic data while prerendering
// to avoid hydration errors.
export function useIsMounted() {
    const [mounted, setMounted] = useState(false);
    useLayoutEffect(() => setMounted(true), []);
    return mounted;
}
