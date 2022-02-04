import Head from 'next/head';
import RabbitSignHeader from '../../../components/concepts/RabbitSignHeader';


export default function Home() {
    return (
        <div className="dark:text-white dark:bg-gray-900">
            <Head>
                <title>Unlimited Free E-Signatures | RabbitSign</title>
                <meta name="description" content="RabbitSign provides unlimited free e-signing. Send and sign as many documents and templates as you want, at no cost."/>
            </Head>

            <RabbitSignHeader />

            <section className="pt-10">
                <h1 className="text-7xl font-bold text-center mb-4">Stop paying for e-signing.</h1>
                <p className="text-center mb-8">RabbitSign offers truly unlimited free e-signing. Send and sign as many documents as you want, at no cost.</p>
                <div className="space-x-4 text-center">
                    <button className="bg-red-400 py-2 px-4 rounded-md text-lg text-white">Get Started</button>
                    <button className="py-2 px-4 text-lg">Learn More</button>
                </div>
            </section>

            <section className="pt-14 pb-2 mb-20">
                <div className="about">
                    <div className="w-full mx-auto -z-10 bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 transform -skew-y-3 flex flex-row">
                        <div className="transform skew-y-3 mx-auto -my-4 flex flex-row space-x-12">
                            <div className="bg-white rounded-2xl p-8 shadow-xl text-gray-900 max-w-sm text-center">
                                <h2 className="text-3xl font-bold mb-4">Unlimited Free Templates</h2>
                                <img src="/person.svg" alt="person" className="mx-auto w-16 mb-4"/>
                                <p>
                                    Quickly send the same document for signature over and over.
                                    There is no limit on how many templates you can create and use.
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-xl text-gray-900 max-w-sm text-center">
                                <h2 className="text-3xl font-bold mb-4">Strong Privacy Protection</h2>
                                <img src="/shield-lock.svg" alt="shield" className="mx-auto w-16 mb-4"/>
                                <p>
                                    Documents are removed from the server after 60 days.
                                    Only you and your signers can access them, via an email sent out with the signed copy.
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-xl text-gray-900 max-w-sm text-center">
                                <h2 className="text-3xl font-bold mb-12">Backed by Blockchain</h2>
                                <img src="/signing.svg" alt="signing" className="mx-auto w-16 mb-4"/>
                                <p>
                                    All signed documents create a record on a blockchain,
                                    which proves their validity. [Learn more](faq)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h1 className="text-4xl font-bold text-center">FAQs</h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </section>
        </div>
    )
}
