import {ReactNode, useEffect, useState} from 'react';
import Link from 'next/link';


export type User = {
    handle: string, email?: string, firstName?: string, lastName?: string,
    country?: string, city?: string, organization?: string,
    contribution: number, rank: string, maxRank: string, rating: number, maxRating: number,
    lastOnlineTimeSeconds: number, registrationTimeSeconds: number,
    friendOfCount: number, avatar: string, titlePhoto: string
}
export default function CfSidebar() {
    // TODO: put this in a `getStaticProps` somehow
    const [topUsers, setTopUsers] = useState<User[]>([])
    useEffect(() => {
        fetch('https://codeforces.com/api/user.ratedList?activeOnly=true&includeRetired=false')
            .then(res => res.json())
            .then(res => setTopUsers(res.result.slice(0, 10)))
    }, [])

    return (
        <aside className="flex flex-col gap-4 w-64">
            <CfSidebarCard heading="Profile | ky28059" className="p-4">
                <p><strong>Rating:</strong> 1007</p>
                <p><strong>Contribution:</strong> +12</p>
            </CfSidebarCard>

            <CfSidebarCard heading="Top rated">
                <div className="table table-fixed py-2 w-full">
                    <div className="table-header-group font-medium">
                        <div className="table-row">
                            <div className="table-cell pr-4 py-0.5 w-11 text-right">#</div>
                            <div className="table-cell py-0.5">User</div>
                            <div className="table-cell pr-3 py-0.5">Rating</div>
                        </div>
                    </div>
                    <div className="table-row-group">
                        {topUsers.map((user, i) => (
                            <Link href={`/concepts/codeforces/profile/${user.handle}`}>
                                <a className="table-row hover:bg-gray-300/20 text-inherit hover:no-underline">
                                    <div className="table-cell pr-4 py-0.5 text-right">{i + 1}</div>
                                    <div className="table-cell py-0.5">{user.handle}</div>
                                    <div className="table-cell pr-3 py-0.5">{user.rating}</div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </CfSidebarCard>
        </aside>
    )
}

function CfSidebarCard(props: {heading: string, children: ReactNode, className?: string}) {
    return (
        <section className="bg-white dark:bg-dark rounded-lg border border-gray-500/25 overflow-hidden">
            <h3 className="px-4 py-2 font-medium border-b border-gray-500/25">
                {props.heading}
            </h3>
            <div className={'text-sm' + (props.className ? ` ${props.className}` : '')}>
                {props.children}
            </div>
        </section>
    )
}
