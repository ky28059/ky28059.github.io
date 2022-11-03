import Feature from './Feature';
import Header from './Header';


export default function Home() {
    return (
        <div className="dark:text-white dark:bg-gray-900">
            <Header />

            <section className="pt-10">
                <h1 className="text-7xl font-bold text-center mb-4">Stop paying for e-signing.</h1>
                <p className="text-center mb-8">RabbitSign offers truly unlimited free e-signing. Send and sign as many documents as you want, at no cost.</p>
                <div className="space-x-4 text-center">
                    <button className="bg-blue-500 py-2 px-4 rounded-md text-lg text-white font-medium">Get Started</button>
                    <button className="py-2 px-4 text-lg font-medium">Learn More</button>
                </div>
            </section>

            <section className="pt-14 pb-2 mb-20">
                <div className="w-full mx-auto -z-10 bg-gradient-to-r from-green-400 to-blue-500 transform -skew-y-3 flex flex-row">
                    <div className="transform skew-y-3 mx-auto -my-4 flex flex-row space-x-12">
                        <div className="bg-white rounded-2xl p-8 shadow-xl text-gray-900 max-w-sm text-center">
                            <h2 className="text-3xl font-bold mb-4">Unlimited Free Templates</h2>
                            <img src="/concepts/rabbitsign/person.svg" alt="person" className="mx-auto w-16 mb-4"/>
                            <p>
                                Quickly send the same document for signature over and over.
                                There is no limit on how many templates you can create and use.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-xl text-gray-900 max-w-sm text-center">
                            <h2 className="text-3xl font-bold mb-4">Strong Privacy Protection</h2>
                            <img src="/concepts/rabbitsign/shield-lock.svg" alt="shield" className="mx-auto w-16 mb-4"/>
                            <p>
                                Documents are removed from the server after 60 days.
                                Only you and your signers can access them, via an email sent out with the signed copy.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-xl text-gray-900 max-w-sm text-center">
                            <h2 className="text-3xl font-bold mb-12">Backed by Blockchain</h2>
                            <img src="/concepts/rabbitsign/signing.svg" alt="signing" className="mx-auto w-16 mb-4"/>
                            <p>
                                All signed documents create a record on a blockchain,
                                which proves their validity. [Learn more](faq)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-screen-xl pb-10">
                <h1 className="text-4xl font-bold text-center mb-8">Features</h1>
                <div className="grid grid-cols-4 gap-4">
                    <Feature name="Unlimited Signature Requests" link="/">
                        Male rabbits are called <em>bucks</em>; females are called <em>does</em>.
                    </Feature>
                    <Feature name="Proof of Existence" link="/">
                        Signed documents create permanent records on a blockchain, which are used to prove they haven't
                        been tampered with.
                    </Feature>
                    <Feature name="Document Deletion" link="/">
                        Documents are deleted from RabbitSign's servers after 60 days, ___.
                    </Feature>
                    <Feature name="Language Support" link="/">
                        More recently, the term <em>kit</em> or <em>kitten</em> has been used to refer to a young rabbit.
                    </Feature>
                    <Feature name="Audit Trail" link="/">
                        A group of rabbits is known as a <em>colony</em> or <em>nest</em> (or, occasionally, a <em>warren</em>,
                        though this more commonly refers to where the rabbits live).
                    </Feature>
                    <Feature name="Template Links" link="/">
                        The word rabbit itself derives from the Middle English <em>rabet</em>, a borrowing from the Walloon <em>robète</em>,
                        which was a diminutive of the French or Middle Dutch <em>robbe</em>.
                    </Feature>
                    <Feature name="Signature Customization" link="/">
                        Beginning in the Middle Ages, the European rabbit has been widely kept as livestock, starting in
                        ancient Rome.
                    </Feature>
                    <Feature name="Remind Signers" link="/">
                        Some strains of rabbit have been bred specifically as research subjects. As livestock, rabbits
                        are bred for their meat and fur.
                    </Feature>
                    <Feature name="Date Format Customization" link="/">
                        Rabbit fur, prized for its softness, can be found in a broad range of coat colors and patterns,
                        as well as lengths.
                    </Feature>
                    <Feature name="Language Support" link="/">
                        With its widespread effect on ecologies and cultures, the rabbit is, in many areas of the world,
                        a part of daily life—as food, clothing, a companion, and a source of artistic inspiration.
                    </Feature>
                </div>
            </section>
        </div>
    )
}
