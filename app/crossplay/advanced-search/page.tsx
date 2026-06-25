import type { Metadata } from 'next';
import Link from 'next/link';

// Components
import CrossplayAdvancedSearchContent from '@/app/crossplay/advanced-search/CrossplayAdvancedSearchContent';


export const metadata: Metadata = {
    title: '(Advanced) Crossplay word search',
    description: 'A word candidate finder for NYT Crossplay.'
}

export default async function CrossplayAdvancedSearch() {
    return (
        <>
            <Link href="/" className="text-secondary text-sm mb-10 -ml-5 block w-max">
                ← Back to home
            </Link>

            <div className="flex gap-8">
                <CrossplayAdvancedSearchContent />

                <aside className="w-80 flex-none pl-8 border-l border-tertiary sticky top-8 h-max">
                    <h1 className="text-2xl font-bold mb-3">
                        (Advanced) Crossplay word search
                    </h1>
                    <p className="text-secondary text-sm mb-3">
                        A constructibility-based word search for NYT Crossplay.
                    </p>
                    <p className="text-secondary text-sm">
                        For less morally dubious search functionality, see a less painful implementation of Crossplay's
                        in-app dictionary feature in{' '}
                        <Link href="/crossplay/search" className="text-primary">basic search</Link>.
                    </p>
                </aside>
            </div>
        </>
    )
}
