export default function Spinner() {
    return (
        <div className="h-6 w-6 rounded-full border-[0.25rem] border-secondary border-r-transparent animate-spin">
            <span className="sr-only">Loading...</span>
        </div>
    )
}
