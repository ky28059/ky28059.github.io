import { Metadata } from 'next';
import DroughtCounter from './DroughtCounter';


export const metadata: Metadata = {
    title: 'Drought',
    description: 'Counter of days since Obi-Wan\'s last commit to WATT.'
}

export default function Drought() {
    return (
        <div className="h-screen flex items-center justify-center">
            <img
                src="/assets/drought/desert.png"
                alt="desert"
                className="fixed inset-0 w-full h-full object-cover object-center"
            />

            <div className="fixed inset-0 bg-black/20" />
            <main className="relative text-white text-center">
                <DroughtCounter />
                <h2 className="text-xl md:text-4xl lg:text-5xl font-medium">since Obi-Wan's last commit to WATT.</h2>
            </main>
        </div>
    )
}
