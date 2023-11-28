import LinkHeading from '../../../components/LinkHeading';


export default function APArt2023() {
    return (
        <>
            <h1 className="font-bold text-4xl mb-3">AP Drawing 2023</h1>
            <p className="text-primary dark:text-primary-dark">
                <strong>Submitted:</strong> 2023-05-05
            </p>
            <p className="text-primary dark:text-primary-dark">
                <strong>Score:</strong> AP 6 (perfect score!)
            </p>

            <div className="flex mt-12 gap-10">
                <aside className="sticky flex-none h-max top-8 pr-10 border-r border-tertiary dark:border-tertiary-dark">
                    <a href="#sustained-investigation" className="text-primary dark:text-primary-dark block mb-2 font-semibold">
                        Sustained investigation
                    </a>
                    <ol className="list-decimal pl-7 text-sm marker:text-primary dark:marker:text-primary-dark mb-6">
                        <li><a href="#1" className="text-primary dark:text-primary-dark">Modern Man (process)</a></li>
                        <li><a href="#2" className="text-primary dark:text-primary-dark">Modern Man</a></li>
                        <li><a href="#3" className="text-primary dark:text-primary-dark">Hope</a></li>
                        <li><a href="#4" className="text-primary dark:text-primary-dark">iPhetamines</a></li>
                        <li><a href="#5" className="text-primary dark:text-primary-dark">Drowning (draft)</a></li>
                        <li><a href="#6" className="text-primary dark:text-primary-dark">Drowning (process)</a></li>
                        <li><a href="#7" className="text-primary dark:text-primary-dark">Drowning</a></li>
                        <li><a href="#8" className="text-primary dark:text-primary-dark">Great American Garbage Patch (process)</a></li>
                        <li><a href="#9" className="text-primary dark:text-primary-dark">Great American Garbage Patch</a></li>
                        <li><a href="#10" className="text-primary dark:text-primary-dark">Two Minutes to Midnight</a></li>
                        <li><a href="#11" className="text-primary dark:text-primary-dark">21st Century Thinker (draft)</a></li>
                        <li><a href="#12" className="text-primary dark:text-primary-dark">21st Century Thinker</a></li>
                        <li><a href="#13" className="text-primary dark:text-primary-dark">The God Particle (process)</a></li>
                        <li><a href="#14" className="text-primary dark:text-primary-dark">The God Particle</a></li>
                        <li><a href="#15" className="text-primary dark:text-primary-dark">Death of the Artist</a></li>
                    </ol>

                    <a href="#selected-works" className="text-primary dark:text-primary-dark block mb-2 font-semibold">
                        Selected works
                    </a>
                    <ol className="list-decimal pl-7 text-sm marker:text-primary dark:marker:text-primary-dark">
                        <li><a href="#2" className="text-primary dark:text-primary-dark">Modern Man</a></li>
                        <li><a href="#3" className="text-primary dark:text-primary-dark">Hope</a></li>
                        <li><a href="#4" className="text-primary dark:text-primary-dark">iPhetamines</a></li>
                        <li><a href="#9" className="text-primary dark:text-primary-dark">Great American Garbage Patch</a></li>
                        <li><a href="#15" className="text-primary dark:text-primary-dark">Death of the Artist</a></li>
                    </ol>
                </aside>

                <div>
                    <LinkHeading className="text-3xl font-bold mb-8" id="sustained-investigation">
                        Sustained investigation
                    </LinkHeading>

                    <div className="flex flex-col gap-16 pl-2">
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
                    </div>

                    <LinkHeading className="text-2xl font-bold mb-8 mt-20" id="selected-works">
                        Selected works
                    </LinkHeading>
                </div>
            </div>
        </>
    )
}

type PortfolioPieceProps = {
    name: string,
    src: string,
    id: string,
    height: string,
    width: string,
    materials: string,
    children: string,
}
function PortfolioPiece(props: PortfolioPieceProps) {
    return (
        <div className="flex gap-8">
            {/* TODO: popup on click */}
            <img
                className="max-w-md rounded shadow-md"
                src={props.src}
                alt={props.name}
            />
            <div>
                <LinkHeading id={props.id} className="font-semibold text-2xl mb-2">
                    {props.name}
                </LinkHeading>

                <p className="text-primary dark:text-primary-dark">
                    <strong>Height:</strong> {props.height}
                </p>
                <p className="text-primary dark:text-primary-dark">
                    <strong>Width:</strong> {props.width}
                </p>
                <p className="text-primary dark:text-primary-dark">
                    <strong>Material(s):</strong> {props.materials}
                </p>
                <p className="text-primary dark:text-primary-dark max-w-prose">
                    <strong>Process(es):</strong> {props.children}
                </p>
                <p className="text-secondary dark:text-secondary-dark text-sm">
                    ({props.children.length} chars)
                </p>
            </div>
        </div>
    )
}
