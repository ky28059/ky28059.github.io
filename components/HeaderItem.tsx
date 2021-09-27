import Link from 'next/link';


type HeaderItemProps = {to: string, name: string, exact?: boolean};
export default function HeaderItem(props: HeaderItemProps) {
    let {to, name, exact} = props;

    return (
        <span className="item p-4">
            <Link href={to}>
                <a>{name}</a>
            </Link>
        </span>
    )
}
