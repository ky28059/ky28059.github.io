import {FillerText} from './ConceptsCard';


// The mock browser window image on the home page "About" section.
// TODO: abstract this more with `ConceptsCard`?
export default function MockPage() {
    return (
        <div className="hidden sm:block bg-white dark:bg-midnight rounded-lg shadow-lg basis-72 min-w-[16rem] pb-4 h-max">
            <div className="flex gap-2 p-2 border-b border-gray-100/20">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-lime-500" />
            </div>
            <div className="flex flex-col gap-4 p-3">
                <div className="h-20 bg-gray-300/40 dark:bg-gray-300/10 rounded-lg animate-pulse" />
                <div className="flex flex-col gap-2">
                    <FillerText />
                    <FillerText width={60} />
                </div>
                <div className="flex flex-col gap-2">
                    <FillerText />
                    <FillerText width={60} />
                </div>
            </div>
        </div>
    )
}
