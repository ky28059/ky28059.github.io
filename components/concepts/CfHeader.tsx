import {ReactNode} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import ThemeToggle from '../ThemeToggle';
import cfUsers from '../../util/cfUsers.preval';


export default function CfHeader() {
    return (
        <header className="py-4 mb-20 flex gap-4 items-center">
            <Link href="/concepts/codeforces">
                <img
                    src="/concepts/codeforces/codeforces-sponsored-by-ton.png"
                    alt="Codeforces logo"
                    className="h-12"
                />
            </Link>
            <nav className="flex gap-2">
                <CfHeaderItem href="/">Home</CfHeaderItem>
                <CfHeaderItem href="/contests">Contests</CfHeaderItem>
                <CfHeaderItem href="/groups">Groups</CfHeaderItem>
            </nav>
            <div className="flex gap-5 items-center ml-auto">
                <div className="flex gap-2.5 items-center">
                    <img src={cfUsers.self.avatar} className="w-8 h-8 rounded-full" alt="ky28059" />
                    <Link href="/concepts/codeforces/profile/ky28059" className="text-inherit hover:no-underline font-medium">
                        ky28059
                    </Link>
                </div>
                <div className="cursor-pointer">Log out</div>
                <ThemeToggle className="cursor-pointer" />
            </div>
        </header>
    )
}

function CfHeaderItem(props: {href: string, children: ReactNode}) {
    const {pathname} = useRouter();
    const href = `/concepts/codeforces${props.href}`
    const active = pathname.startsWith(href);

    return (
        <Link href={href} className="p-2 text-inherit">
            {props.children}
        </Link>
    )
}
