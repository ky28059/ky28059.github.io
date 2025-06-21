import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import LinkHeading from '@/components/LinkHeading';


export const metadata: Metadata = {
    title: 'AP Drawing Portfolio 2023',
    description: 'My AP Drawing Portfolio from 2023.'
}

export default function APArt2023() {
    return (
        <div className="flex flex-col lg:flex-row gap-12">
            <aside className="lg:sticky flex-none h-max top-10 pr-12 lg:border-r border-tertiary lg:w-[16rem] xl:w-auto">
                <div className="mb-7 border-l-8 border-s-4 border-grapefruit -ml-4 pl-4">
                    <h1 className="font-bold text-4xl mb-3">AP Drawing 2023</h1>
                    <p className="text-primary">
                        <strong>Submitted:</strong> 2023-05-05
                    </p>
                    <p className="text-primary">
                        <strong>Score:</strong> AP 6 (perfect score!)
                    </p>
                </div>

                <a href="#sustained-investigation" className="text-primary block mb-2 font-semibold">
                    Sustained investigation
                </a>
                <ol className="list-decimal pl-6 text-sm marker:text-primary mb-6">
                    <li><a href="#1" className="text-primary">Modern Man (process)</a></li>
                    <li><a href="#2" className="text-primary">Modern Man</a></li>
                    <li><a href="#3" className="text-primary">Hope</a></li>
                    <li><a href="#4" className="text-primary">iPhetamines</a></li>
                    <li><a href="#5" className="text-primary">Drowning (draft)</a></li>
                    <li><a href="#6" className="text-primary">Drowning (process)</a></li>
                    <li><a href="#7" className="text-primary">Drowning</a></li>
                    <li><a href="#8" className="text-primary">Great American Garbage Patch (process)</a></li>
                    <li><a href="#9" className="text-primary">Great American Garbage Patch</a></li>
                    <li><a href="#10" className="text-primary">Two Minutes to Midnight</a></li>
                    <li><a href="#11" className="text-primary">21st Century Thinker (draft)</a></li>
                    <li><a href="#12" className="text-primary">21st Century Thinker</a></li>
                    <li><a href="#13" className="text-primary">The God Particle (process)</a></li>
                    <li><a href="#14" className="text-primary">The God Particle</a></li>
                    <li><a href="#15" className="text-primary">Death of the Artist</a></li>
                </ol>

                <a href="#selected-works" className="text-primary block mb-2 font-semibold">
                    Selected works
                </a>
                <ol className="list-decimal pl-6 text-sm marker:text-primary">
                    <li><a href="#2-1" className="text-primary">Hope</a></li>
                    <li><a href="#2-2" className="text-primary">Great American Garbage Patch</a></li>
                    <li><a href="#2-3" className="text-primary">iPhetamines</a></li>
                    <li><a href="#2-4" className="text-primary">Modern Man</a></li>
                    <li><a href="#2-5" className="text-primary">Death of the Artist</a></li>
                </ol>
            </aside>

            <div className="min-w-0">
                <LinkHeading className="text-3xl font-bold mb-6" id="sustained-investigation">
                    Sustained investigation
                </LinkHeading>
                <p className="text-primary mb-4 text-sm border-l-2 border-secondary pl-4">
                    High-tech gadgets like phones, smart watches, and airpods are ubiquitous in today’s society. But as
                    technology continues to evolve at an ever-increasing pace, its effect on users can often be overlooked.
                    As an aspiring engineer with a background in software development and robotics, I wanted to investigate
                    our relationship to our technology and how technology has both helped and hurt humanity. How have new
                    technologies shaped the world around us? How does the internet and social media keep us connected but
                    also isolated, overwhelmed, and imprisoned?
                </p>
                <p className="text-primary mb-14 text-sm border-l-2 border-secondary pl-4">
                    My sustained investigation began with broad depictions of technology usage in modern society (2, 3).
                    I then examined specific relationships: social media addiction (4), media negativity (7), wasteful
                    consumerism (9), the relationship between science and warfare (10),  digital privacy (12), and AI art
                    (15). I experimented with high saturation to portray the artificial highs and lows of modern consumption
                    (3, 4, 9, 12), and contrast to highlight lighting, texture, and surfaces (2, 3, 9, 10, 12, 14, 15).
                    I revise works to decrease visual clutter and better highlight my original ideas (7, 12).
                </p>

                <PortfolioPieces>
                    <PortfolioPiece
                        name="1. Modern Man (process)"
                        id="1"
                        src="/assets/portfolios/ap-art-2023/1.jpg"
                        height="N/A"
                        width="N/A"
                        materials="Markers, pens, pencils, color pencils"
                    >
                        Stages of sketching / experimentation behind my first piece.
                    </PortfolioPiece>

                    <PortfolioPiece
                        name="2. Modern Man"
                        id="2"
                        src="/assets/portfolios/ap-art-2023/2.jpg"
                        height="16”"
                        width="12”"
                        materials="Markers, pens, color pencils"
                    >
                        Warm marble (statue of David)=traditional human values. Cold metal covering=influence of technology.
                    </PortfolioPiece>

                    <PortfolioPiece
                        name="3. Hope"
                        id="3"
                        src="/assets/portfolios/ap-art-2023/3.jpg"
                        height="24”"
                        width="18”"
                        materials="Markers, pens, color pencils"
                    >
                        Social media icons+harsh, warm colors=chaos in world. Green seedling=contrast hope for growth+change
                    </PortfolioPiece>

                    <PortfolioPiece
                        name="4. iPhetamines"
                        id="4"
                        src="/assets/portfolios/ap-art-2023/4.jpg"
                        height="12”"
                        width="16”"
                        materials="Markers, pens, color pencils, iPhone screen"
                    >
                        iPhone pill=high-tech addiction. Saturated colors+pasted icons=disingenuity of online connections
                    </PortfolioPiece>

                    <PortfolioPiece
                        name="5. Drowning (draft)"
                        id="5"
                        src="/assets/portfolios/ap-art-2023/5.png"
                        height="12”"
                        width="9”"
                        materials="Markers, pens, color pencils, Adobe Photoshop"
                    >
                        Draft; rushing waterfall+headlines=crushing exposure to modern news. Person struggles to break free
                    </PortfolioPiece>

                    <PortfolioPiece
                        name="6. Drowning (process)"
                        id="6"
                        src="/assets/portfolios/ap-art-2023/6.jpg"
                        height="12”"
                        width="9”"
                        materials="Pens"
                    >
                        Notes for the revision of my fourth piece.
                    </PortfolioPiece>

                    <PortfolioPiece
                        name="7. Drowning"
                        id="7"
                        src="/assets/portfolios/ap-art-2023/7.jpg"
                        height="12”"
                        width="9”"
                        materials="Markers, pens, color pencils, Adobe Photoshop, newspapers"
                    >
                        Headline collage=crushing constant exposure to modern news. Escaping person=struggle to break free.
                    </PortfolioPiece>

                    <PortfolioPiece
                        name="8. Great American Garbage Patch (process)"
                        id="8"
                        src="/assets/portfolios/ap-art-2023/8.jpg"
                        height="N/A"
                        width="N/A"
                        materials="Markers, pens, pencils, color pencils"
                    >
                        Stages of sketching / experimentation behind my fifth piece.
                    </PortfolioPiece>

                    <PortfolioPiece
                        name="9. Great American Garbage Patch"
                        id="9"
                        src="/assets/portfolios/ap-art-2023/9.jpg"
                        height="24”"
                        width="18”"
                        materials="Markers, pens, color pencils"
                    >
                        Saturated billboards+cityscape=allure of consumerism; drab, gray garbage heap/pollution=wastefulness
                    </PortfolioPiece>

                    <PortfolioPiece
                        name="10. Two Minutes to Midnight"
                        id="10"
                        src="/assets/portfolios/ap-art-2023/10.jpg"
                        height="24”"
                        width="18”"
                        materials="Markers, pens, color pencils"
                    >
                        Beaker, tools=science/engineering misused for destruction. Stopwatch=humanity running out of time.
                    </PortfolioPiece>

                    <PortfolioPiece
                        name="11. 21st Century Thinker (draft)"
                        id="11"
                        src="/assets/portfolios/ap-art-2023/11.jpg"
                        height="24”"
                        width="18”"
                        materials="Markers, pens"
                    >
                        Draft; censorship=difficulty of finding truth online. Pipes+VR goggles=manipulation of thought/views
                    </PortfolioPiece>

                    <PortfolioPiece
                        name="12. 21st Century Thinker"
                        id="12"
                        src="/assets/portfolios/ap-art-2023/12.jpg"
                        height="24”"
                        width="18”"
                        materials="Markers, pens, collage"
                    >
                        iPhone data collection=lack of privacy online. Pipes+VR goggles=manipulation of thought/views
                    </PortfolioPiece>

                    <PortfolioPiece
                        name="13. The God Particle (process)"
                        id="13"
                        src="/assets/portfolios/ap-art-2023/13.jpg"
                        height="N/A"
                        width="N/A"
                        materials="Markers, pens, color pencils"
                    >
                        Stages of sketching / experimentation behind my eighth piece.
                    </PortfolioPiece>

                    <PortfolioPiece
                        name="14. The God Particle"
                        id="14"
                        src="/assets/portfolios/ap-art-2023/14.jpg"
                        height="24”"
                        width="18”"
                        materials="Markers, pens, color pencils"
                    >
                        Particle collider=beauty of science. Hand reaching out=dream of humanity to explore the unknown.
                    </PortfolioPiece>

                    <PortfolioPiece
                        name="15. Death of the Artist"
                        id="15"
                        src="/assets/portfolios/ap-art-2023/15.jpg"
                        height="24”"
                        width="19”"
                        materials="Markers, pens, color pencils"
                    >
                        Landscape painting = idyllic, old-fashioned art. Robot arm = technological advancements (AI).
                    </PortfolioPiece>
                </PortfolioPieces>

                <LinkHeading className="text-3xl font-bold mb-8 mt-20" id="selected-works">
                    Selected works
                </LinkHeading>

                <PortfolioPieces>
                    <PortfolioPiece
                        name="1. Hope"
                        id="2-1"
                        src="/assets/portfolios/ap-art-2023/3.jpg"
                        height="24”"
                        width="18”"
                        ideas="A seedling sprouts in a society overrun by capitalism, industrialization, and greed."
                        materials="Markers, pens, color pencils"
                    >
                        Social media icons+harsh, warm colors=chaos in world. Green seedling=contrast hope for growth+change
                    </PortfolioPiece>

                    <PortfolioPiece
                        name="2. Great American Garbage Patch"
                        id="2-2"
                        src="/assets/portfolios/ap-art-2023/9.jpg"
                        height="24”"
                        width="18”"
                        ideas="Consumerism’s effect on the earth."
                        materials="Markers, pens, color pencils"
                    >
                        Saturated billboards+cityscape=allure of consumerism; drab, gray garbage heap/pollution=wastefulness
                    </PortfolioPiece>

                    <PortfolioPiece
                        name="3. iPhetamines"
                        id="2-3"
                        src="/assets/portfolios/ap-art-2023/4.jpg"
                        height="12”"
                        width="16”"
                        ideas="The addictive nature of smartphone notifications and social media."
                        materials="Markers, pens, color pencils"
                    >
                        iPhone pill=high-tech addiction. Saturated colors+pasted icons=disingenuity of online connections
                    </PortfolioPiece>

                    <PortfolioPiece
                        name="4. Modern Man"
                        id="2-4"
                        src="/assets/portfolios/ap-art-2023/2.jpg"
                        height="16”"
                        width="12”"
                        ideas="The augmentation of traditional values / ideas in a modern society."
                        materials="Markers, pens, color pencils"
                    >
                        Warm marble (statue of David)=traditional human values. Cold metal covering=influence of technology.
                    </PortfolioPiece>

                    <PortfolioPiece
                        name="5. Death of the Artist"
                        id="2-5"
                        src="/assets/portfolios/ap-art-2023/15.jpg"
                        height="24”"
                        width="19”"
                        ideas="Creating art in an AI-permeated world."
                        materials="Markers, pens, color pencils"
                    >
                        Landscape painting = idyllic, old-fashioned art. Robot arm = technological advancements (AI).
                    </PortfolioPiece>
                </PortfolioPieces>
            </div>
        </div>
    )
}

function PortfolioPieces(props: {children: ReactNode}) {
    return (
        <div className="flex flex-col gap-16 pl-2">
            {props.children}
        </div>
    )
}

type PortfolioPieceProps = {
    name: string,
    src: string,
    id: string,
    height: string,
    width: string,
    materials: string,
    ideas?: string,
    children: string,
}
function PortfolioPiece(props: PortfolioPieceProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-x-8 gap-y-4">
            {/* TODO: popup on click */}
            <img
                className="sm:max-w-xs md:max-w-sm xl:max-w-md rounded shadow-md"
                src={props.src}
                alt={props.name}
            />
            <div className="min-w-0">
                <LinkHeading id={props.id} className="font-semibold text-2xl mb-2">
                    {props.name}
                </LinkHeading>

                <p className="text-primary">
                    <strong>Height:</strong> {props.height}
                </p>
                <p className="text-primary">
                    <strong>Width:</strong> {props.width}
                </p>
                {props.ideas && (
                    <p className="text-primary break-words">
                        <strong>Idea(s):</strong> {props.ideas}
                    </p>
                )}
                <p className="text-primary">
                    <strong>Material(s):</strong> {props.materials}
                </p>
                <p className="text-primary max-w-prose break-words">
                    <strong>Process(es):</strong> {props.children}
                </p>
                <p className="text-secondary text-sm">
                    ({props.children.length} chars)
                </p>
            </div>
        </div>
    )
}
