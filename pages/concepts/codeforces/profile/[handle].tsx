import Head from 'next/head';
import Link from 'next/link';
import CfLayout from '../../../../components/concepts/CfLayout';
import {User} from '../../../../components/concepts/CfSidebar';

// Icons
import {BsGearFill, BsPeopleFill} from 'react-icons/bs';
import {FaStickyNote} from 'react-icons/fa';
import {GetStaticPropsContext} from "next";


export default function Profile(props: User) {
    const {handle, titlePhoto, rank, rating, maxRating, firstName, lastName, city, country, organization, friendOfCount} = props;

    return (
        <CfLayout>
            <Head>
                <title>{handle} | Codeforces</title>
            </Head>

            <div className="flex gap-6">
                <img src={titlePhoto} alt={`${handle} profile picture`} className="h-36 w-36 rounded-full" />
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
    const user = (await (await fetch(`https://codeforces.com/api/user.info?handles=${params!.handle}`)).json()).result[0];
    return {
        props: user
    }
}

export async function getStaticPaths() {
    const res = await (await fetch('https://codeforces.com/api/user.ratedList?activeOnly=true&includeRetired=false')).json();
    const top = res.result.slice(0, 10) as User[];

    return {
        paths: [
            {params: {handle: 'ky28059'}},
            ...top.map(user => ({params: {handle: user.handle}}))
        ],
        fallback: false
    }
}
