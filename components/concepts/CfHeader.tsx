import {ReactNode} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import ThemeToggle from '../ThemeToggle';


export default function CfHeader() {
    return (
        <header className="py-4 mb-20 flex gap-4 items-center">
            <Link href="/concepts/codeforces">
                <a>
                    <img
                        src="/concepts/codeforces/codeforces-sponsored-by-ton.png"
                        alt="Codeforces logo"
                        className="h-12"
                    />
                </a>
            </Link>
            <nav className="flex gap-2">
                <CfHeaderItem href="/">Home</CfHeaderItem>
                <CfHeaderItem href="/contests">Contests</CfHeaderItem>
                <CfHeaderItem href="/groups">Groups</CfHeaderItem>
            </nav>
            <div className="flex gap-5 items-center ml-auto">
                <div className="flex gap-2.5 items-center">
                    <img src="/pfp.png" className="w-8 h-8 rounded-full" alt="ky28059" />
                    <Link href="/concepts/codeforces/profile/ky28059">
                        <a className="text-inherit hover:no-underline font-medium">ky28059</a>
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
        <Link href={href}>
            <a className="p-2 text-inherit">
                {props.children}
            </a>
        </Link>
    )
}
