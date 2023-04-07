import Head from 'next/head';


export default function Landing() {
    return (
        <div className="bg-white text-dark">
            <Head>
                <title>A Geometric Approach to Matrices</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="text-center mb-16 pt-8">
                <h1 className="text-7xl font-bold mb-4">A Geometric Approach to Matrices</h1>
                <h2 className="text-2xl">GAtM Online Resources</h2>
            </section>

            <section className="container space-y-4 mb-16">
                <p>
                    This is a website where all resources pertaining to GAtM will be made available.
                    This includes the PDF versions of the textbook and answer key, individual chapters, and also
                    eventually programs and apps for students and some CADs for visuals.
                </p>
                <p>
                    GAtM's source code can be found here. You are welcome to make an issue or a fork if you see any issue
                    with the text; if you do want to clone it and run it on your computer, make sure to read the README
                    to get the full instructions on how to build it. GAtM is written with LaTeX, Asymptote, and Tikz.
                </p>
                <p>
                    Interactives are currently a work-in-progress and will have a page of their own soon. Here's the link
                    to the first interactive for now: It's A Snap.
                </p>
            </section>

            <section className="flex flex-wrap gap-8 mx-16 pb-16">
                <div className="flex basis-[48rem] flex-grow gap-8">
                    <img
                        src="/concepts/gatm/cover-page.png"
                        alt="GAtM Cover"
                        className="h-80 outline outline-1 outline-gray-400"
                    />
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold mb-4">A Geometric Approach to Matrices</h2>
                        <p>
                            This is the full PDF for the textbook; chapters are provided for convenience. Keep in mind that
                            these versions will be continuously updated so may not match the printed version.
                        </p>
                        <a href="/textbook/gatm.pdf" className="block text-blue-600">Click here for the full textbook.</a>

                        <h3 className="text-xl font-bold">Chapters:</h3>
                        <ol className="list-decimal ml-8">
                            <li>For the final version of this website,</li>
                            <li>Chapter generation can be done as part of the python build process.</li>
                            <li>Maybe it can create a JSON mapping of chapter names to links</li>
                            <li>or something else which can be converted easily to an array and mapped;</li>
                            <li>Perhaps even crazier,</li>
                            <li>the build script can possibly be invoked at website build time via <code>getStaticProps</code>,</li>
                            <li>passing the generated pages into index as page props.</li>
                            <li>Whatever the case, there's a lot of potential for awesomeness with a framework shift.</li>
                            <li>You should really consider it!</li>
                            <li>Thank you.</li>
                            <li>Fin</li>
                        </ol>
                    </div>
                </div>

                <div className="flex basis-[48rem] flex-grow gap-8">
                    <img
                        src="/concepts/gatm/cover-page-answers.png"
                        alt="GAtM Cover"
                        className="h-80 outline outline-1 outline-gray-400"
                    />
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold mb-4">A Geometric Approach to Matrices (Answer Key)</h2>
                        <p>
                            This contains answers to all of the problems in the textbook. Note that only the first five chapter
                            PDFs have been completely updated to match the textbook; the full answer key and other chapters
                            may contain answers to problems that do not exist.
                        </p>
                        <a href="/textbook/gatm-key.pdf" className="block text-blue-600">Click here for the full answer key.</a>

                        <h3 className="text-xl font-bold">Chapters:</h3>
                        <ol className="list-decimal ml-8">
                            <li>React and the DOM</li>
                            <li>TypeScript, types, and compilation</li>
                            <li>NextJS and the future of web development</li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    )
}
