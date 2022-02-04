import Link from 'next/link';


type FeatureProps = {name: string, desc: string, link: string};
export default function Feature(props: FeatureProps) {
    const {name, desc, link} = props;

    return (
        <div className="bg-white text-black text-center rounded-md border border-gray-200 p-4 hover:border-transparent hover:shadow-xl transition-shadow ease-in-out duration-200">
            <h5 className="font-bold">{name}</h5>
            <p>{desc}</p>
            <Link href={link}><a>Learn more</a></Link>
        </div>
    )
}
