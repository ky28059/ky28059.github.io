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
                        [...]
                    </p>
                    <p className="text-secondary text-sm">
                        For a less-cheaty implementation of Crossplay's dictionary feature, see the{' '}
                        <Link href="/crossplay/search" className="text-primary">basic search</Link>.
                    </p>
                </aside>
            </div>
        </>
    )
}
