import {ReactNode} from 'react';
import Link from 'next/link';


type FeatureProps = {name: string, children: ReactNode, link: string};
export default function Feature(props: FeatureProps) {
    const {name, children: desc, link} = props;

    return (
        <div className="bg-white dark:bg-gray-800 text-center rounded-md border border-gray-400/50 dark:border-gray-700/50 p-4 hover:border-transparent hover:dark:border-transparent hover:shadow-xl transition ease-in-out duration-200">
            <h5 className="text-lg font-bold mb-2">{name}</h5>
            <p className="mb-1.5">{desc}</p>
            <Link href={link}><a className="font-medium">Learn more</a></Link>
        </div>
    )
}
