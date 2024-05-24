import {Metadata} from 'next';
import {ReactNode} from 'react';


export const metadata: Metadata = {
    title: {
        absolute: 'A Geometric Approach to Matrices'
    }
}

export default function Landing() {
    return (
        <div className="bg-white text-dark">
            <main className="container py-24">
                <section className="text-center mb-16">
                    <h1 className="text-7xl font-bold mb-4">A Geometric Approach to Matrices</h1>
                    <h2 className="text-2xl">GAtM Online Resources</h2>
                </section>

                <section className="space-y-4 mb-24">
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

                <section className="flex flex-wrap gap-16 mx-8">
                    <TextbookContainer name="A Geometric Approach to Matrices" src="/ky28059/www/concepts/gatm/cover-page.png">
                        <p className="mb-4">
                            This is the full PDF for the textbook; chapters are provided for convenience. Keep in mind that
                            these versions will be continuously updated so may not match the printed version.
                        </p>
                        <a href="/textbook/gatm.pdf" className="block text-blue-600 mb-6">
                            Click here for the full textbook.
                        </a>

                        <ChaptersList>
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
                        </ChaptersList>
                    </TextbookContainer>

                    <TextbookContainer name="A Geometric Approach to Matrices (Answer Key)" src="/ky28059/www/concepts/gatm/cover-page-answers.png">
                        <p className="mb-4">
                            This contains answers to all of the problems in the textbook. Note that only the first five chapter
                            PDFs have been completely updated to match the textbook; the full answer key and other chapters
                            may contain answers to problems that do not exist.
                        </p>
                        <a href="/textbook/gatm-key.pdf" className="block text-blue-600 mb-6">
                            Click here for the full answer key.
                        </a>

                        <ChaptersList>
                            <li>React and the DOM</li>
                            <li>TypeScript, types, and compilation</li>
                            <li>NextJS and the future of web development</li>
                        </ChaptersList>
                    </TextbookContainer>
                </section>
            </main>
        </div>
    )
}

type TextbookContainerProps = {name: string, src: string, children: ReactNode}
function TextbookContainer(props: TextbookContainerProps) {
    return (
        <div className="flex basis-[48rem] flex-grow gap-16">
            <img
                src={props.src}
                alt="GAtM Cover"
                className="h-80 outline outline-1 outline-gray-400"
            />
            <div>
                <h2 className="text-2xl font-bold mb-4">{props.name}</h2>
                {props.children}
            </div>
        </div>
    )
}

function ChaptersList(props: {children: ReactNode}) {
    return (
        <>
            <h3 className="text-lg font-bold mb-2">Chapters:</h3>
            <ol className="list-decimal ml-8">
                {props.children}
            </ol>
        </>
    )
}
