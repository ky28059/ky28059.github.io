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

            <LinkHeading className="text-2xl font-bold mb-6 mt-12" id="sustained-investigation">
                Sustained investigation
            </LinkHeading>

            <div className="flex flex-col gap-8 pl-2 max-w-6xl">
                <PortfolioPiece
                    name="1. Modern Man (process)"
                    src="/assets/portfolios/ap-art-2023/1.jpg"
                    height="N/A"
                    width="N/A"
                    materials="Markers, pens, pencils, color pencils"
                >
                    Stages of sketching / experimentation behind my first piece.
                </PortfolioPiece>

                <PortfolioPiece
                    name="2. Modern Man"
                    src="/assets/portfolios/ap-art-2023/2.jpg"
                    height="16”"
                    width="12”"
                    materials="Markers, pens, color pencils"
                    reversed
                >
                    Warm marble (statue of David)=traditional human values. Cold metal covering=influence of technology.
                </PortfolioPiece>

                <PortfolioPiece
                    name="3. Hope"
                    src="/assets/portfolios/ap-art-2023/3.jpg"
                    height="24”"
                    width="18”"
                    materials="Markers, pens, color pencils"
                >
                    Social media icons+harsh, warm colors=chaos in world. Green seedling=contrast hope for growth+change
                </PortfolioPiece>

                <PortfolioPiece
                    name="4. iPhetamines"
                    src="/assets/portfolios/ap-art-2023/4.jpg"
                    height="12”"
                    width="16”"
                    materials="Markers, pens, color pencils, iPhone screen"
                    reversed
                >
                    iPhone pill=high-tech addiction. Saturated colors+pasted icons=disingenuity of online connections
                </PortfolioPiece>

                <PortfolioPiece
                    name="5. Drowning (draft)"
                    src="/assets/portfolios/ap-art-2023/5.png"
                    height="12”"
                    width="9”"
                    materials="Markers, pens, color pencils, Adobe Photoshop"
                >
                    Draft; rushing waterfall+headlines=crushing exposure to modern news. Person struggles to break free
                </PortfolioPiece>

                <PortfolioPiece
                    name="6. Drowning (process)"
                    src="/assets/portfolios/ap-art-2023/6.jpg"
                    height="12”"
                    width="9”"
                    materials="Pens"
                    reversed
                >
                    Notes for the revision of my fourth piece.
                </PortfolioPiece>

                <PortfolioPiece
                    name="7. Drowning"
                    src="/assets/portfolios/ap-art-2023/7.jpg"
                    height="12”"
                    width="9”"
                    materials="Markers, pens, color pencils, Adobe Photoshop, newspapers"
                >
                    Headline collage=crushing constant exposure to modern news. Escaping person=struggle to break free.
                </PortfolioPiece>

                <PortfolioPiece
                    name="8. Great American Garbage Patch (process)"
                    src="/assets/portfolios/ap-art-2023/8.jpg"
                    height="N/A"
                    width="N/A"
                    materials="Markers, pens, pencils, color pencils"
                    reversed
                >
                    Stages of sketching / experimentation behind my fifth piece.
                </PortfolioPiece>

                <PortfolioPiece
                    name="9. Great American Garbage Patch"
                    src="/assets/portfolios/ap-art-2023/9.jpg"
                    height="24”"
                    width="18”"
                    materials="Markers, pens, color pencils"
                >
                    Saturated billboards+cityscape=allure of consumerism; drab, gray garbage heap/pollution=wastefulness
                </PortfolioPiece>

                <PortfolioPiece
                    name="10. Two Minutes to Midnight"
                    src="/assets/portfolios/ap-art-2023/10.jpg"
                    height="24”"
                    width="18”"
                    materials="Markers, pens, color pencils"
                    reversed
                >
                    Beaker, tools=science/engineering misused for destruction. Stopwatch=humanity running out of time.
                </PortfolioPiece>

                <PortfolioPiece
                    name="11. 21st Century Thinker (draft)"
                    src="/assets/portfolios/ap-art-2023/11.jpg"
                    height="24”"
                    width="18”"
                    materials="Markers, pens"
                >
                    Draft; censorship=difficulty of finding truth online. Pipes+VR goggles=manipulation of thought/views
                </PortfolioPiece>

                <PortfolioPiece
                    name="12. 21st Century Thinker"
                    src="/assets/portfolios/ap-art-2023/12.jpg"
                    height="24”"
                    width="18”"
                    materials="Markers, pens, collage"
                    reversed
                >
                    iPhone data collection=lack of privacy online. Pipes+VR goggles=manipulation of thought/views
                </PortfolioPiece>

                <PortfolioPiece
                    name="13. The God Particle (process)"
                    src="/assets/portfolios/ap-art-2023/13.jpg"
                    height="N/A"
                    width="N/A"
                    materials="Markers, pens, color pencils"
                >
                    Stages of sketching / experimentation behind my eighth piece.
                </PortfolioPiece>

                <PortfolioPiece
                    name="14. The God Particle"
                    src="/assets/portfolios/ap-art-2023/14.jpg"
                    height="24”"
                    width="18”"
                    materials="Markers, pens, color pencils"
                    reversed
                >
                    Particle collider=beauty of science. Hand reaching out=dream of humanity to explore the unknown.
                </PortfolioPiece>

                <PortfolioPiece
                    name="15. Death of the Artist"
                    src="/assets/portfolios/ap-art-2023/15.jpg"
                    height="24”"
                    width="19”"
                    materials="Markers, pens, color pencils"
                >
                    Landscape painting = idyllic, old-fashioned art. Robot arm = technological advancements (AI).
                </PortfolioPiece>
            </div>

            <LinkHeading className="text-2xl font-bold mb-3 mt-12" id="selected-works">
                Selected works
            </LinkHeading>
        </>
    )
}

type PortfolioPieceProps = {
    name: string,
    src: string,
    height: string,
    width: string,
    materials: string,
    children: string,
    reversed?: boolean
}
function PortfolioPiece(props: PortfolioPieceProps) {
    return (
        <div className={'flex gap-8' + (props.reversed ? ' flex-row-reverse' : '')}>
            {/* TODO: popup on click */}
            <img
                className="max-w-md rounded shadow-md"
                src={props.src}
                alt={props.name}
            />
            <div className={(props.reversed ? 'text-right' : '')}>
                <h3 className="font-semibold text-2xl mb-2">{props.name}</h3>
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
