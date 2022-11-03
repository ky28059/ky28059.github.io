import Head from 'next/head';
import Link from 'next/link';
import {GetStaticPropsContext} from 'next';
import CfLayout from '../../../../components/concepts/CfLayout';
import cfUsers, {User} from '../../../../util/cfUsers.preval';

// Icons
import {BsGearFill, BsPeopleFill} from 'react-icons/bs';
import {FaStickyNote} from 'react-icons/fa';


export default function Profile(props: User) {
    const {handle, titlePhoto, rank, rating, maxRating, firstName, lastName, city, country, organization, friendOfCount} = props;

    return (
        <CfLayout>
            <Head>
                <title>{handle} | Codeforces</title>
            </Head>

            <div className="flex gap-6">
                <img src={titlePhoto} alt={`${handle} profile picture`} className="h-36 w-36 rounded-full object-cover" />
                <div className="pt-12">
                    <section className="flex gap-4 items-center mb-6">
                        <h1 className="font-bold text-5xl">{props.handle}</h1>
                        <p className="text-sm font-light">
                            {rank} | {rating} (max. {maxRating})
                        </p>
                    </section>
                    <p className="text-sm font-light">
                        {firstName} {lastName}, {city}, {country}
                    </p>
                    <p className="text-sm font-light">from {organization}</p>

                    <section className="flex gap-6 mt-4 mb-4">
                        <span className="flex gap-1.5 items-center">
                            <BsPeopleFill />
                            {friendOfCount}
                        </span>
                        <span className="flex gap-1.5 items-center">
                            <FaStickyNote />
                            1
                        </span>
                    </section>

                    {handle === 'ky28059' && (
                        <Link href="/concepts/codeforces/settings">
                            <a className="flex gap-2 items-center text-inherit hover:no-underline">
                                <BsGearFill />
                                Change settings
                            </a>
                        </Link>
                    )}
                </div>
            </div>
        </CfLayout>
    )
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const {params} = context;
    return {
        props: cfUsers.top.find((user) => user.handle === params!.handle)
            || cfUsers.self
    }
}

// Tries to fetch a codeforces user, retrying after a second if it encounters a rate-limit.
// Ideally we could just fetch the user directly, but because nextjs calls all `getStaticProps` at once for prerendering
// during `next build`, prerending the `[handle]` static paths runs into api rate limits.
// https://github.com/vercel/next.js/discussions/18550
async function tryFetchCodeforcesUser(handle: string): Promise<User> {
    try {
        return (await (await fetch(`https://codeforces.com/api/user.info?handles=${handle}`)).json()).result[0];
    } catch {
        await new Promise((res) => setTimeout(res, 1000));
        return tryFetchCodeforcesUser(handle);
    }
}

export async function getStaticPaths() {
    return {
        paths: [...cfUsers.top, cfUsers.self].map(user => ({params: {handle: user.handle}})),
        fallback: false
    }
}