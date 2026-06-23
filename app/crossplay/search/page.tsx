import type { Metadata } from 'next';
import Link from 'next/link';

// Components
import CrossplaySearchContent from '@/app/crossplay/search/CrossplaySearchContent';


export const metadata: Metadata = {
    title: 'Crossplay word search',
    description: 'A more convenient word search for NYT Crossplay.'
}

export default async function CrossplaySearch() {
    return (
        <>
            <Link href="/" className="text-secondary text-sm mb-10 -ml-5 block w-max">
                ← Back to home
            </Link>

            <div className="flex gap-8">
                <CrossplaySearchContent />

                <aside className="w-80 flex-none pl-8 border-l border-tertiary sticky top-8 h-max">
                    <h1 className="text-2xl font-bold mb-2">
                        Crossplay word search
                    </h1>
                    <p className="text-secondary text-sm">
                        A more convenient implementation of NYT Crossplay's word search, exactly as it functions in in
                        the app (prefix search).
                    </p>
                </aside>
            </div>
        </>
    )
}
