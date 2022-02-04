import Link from 'next/link';


// TODO: Is this component really needed?
type HeaderItemProps = {to: string, name: string};
export default function HeaderItem(props: HeaderItemProps) {
    const {to, name} = props;

    return (
        <span className="p-4">
            <Link href={to}>
                <a>{name}</a>
            </Link>
        </span>
    )
}
