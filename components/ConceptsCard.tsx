export default function ConceptsCard() {
    return (
        <div className="flex flex-col gap-2 p-4 bg-white dark:bg-midnight rounded-lg shadow-lg">
            <FillerText />
            <FillerText width={60} />
        </div>
    )
}

export function FillerText(props: {width?: number}) {
    const {width = 100} = props;

    return (
        <span
            className="block h-4 bg-gray-300/40 dark:bg-gray-300/10 rounded-full animate-pulse"
            style={{width: `${width}%`}}
        />
    )
}
