import Link from 'next/link';
import {notFound} from 'next/navigation';
import {getCfUsers} from '../../../../../util/cfUsers';

// Icons
import {BsGearFill, BsPeopleFill} from 'react-icons/bs';
import {FaStickyNote} from 'react-icons/fa';


export default async function Profile(props: { params: { handle: string } }) {
    const {handle} = props.params;
    const {top, self} = await getCfUsers();

    const user = top.find(user => user.handle === handle) ?? self.handle === handle ? self : notFound();

    return (
        <div className="flex gap-6">
            <img src={user.titlePhoto} alt={`${handle} profile picture`} className="h-36 w-36 rounded-full object-cover" />
            <div className="pt-12">
                <section className="flex gap-4 items-center mb-6">
                    <h1 className="font-bold text-5xl">{handle}</h1>
                    <p className="text-sm font-light">
                        {user.rank} | {user.rating} (max. {user.maxRating})
                    </p>
                </section>
                <p className="text-sm font-light">
                    {user.firstName} {user.lastName}, {user.city}, {user.country}
                </p>
                <p className="text-sm font-light">from {user.organization}</p>

                <section className="flex gap-6 mt-4 mb-4">
                    <span className="flex gap-1.5 items-center">
                        <BsPeopleFill />
                        {user.friendOfCount}
                    </span>
                    <span className="flex gap-1.5 items-center">
                        <FaStickyNote />
                        1
                    </span>
                </section>

                {handle === self.handle && (
                    <Link href="/concepts/codeforces/settings" className="flex gap-2 items-center text-inherit hover:no-underline">
                        <BsGearFill />
                        Change settings
                    </Link>
                )}
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    const {top, self} = await getCfUsers();
    return [...top, self].map(user => ({
        handle: user.handle
    }))
}
