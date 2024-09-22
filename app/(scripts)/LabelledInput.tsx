type LabelledInputProps = {
    value: string | number, setValue: (value: string) => void,
    label: string
};
export default function LabelledInput(props: LabelledInputProps) {
    const { value, setValue, label } = props;
    return (
        <div className="flex flex-col gap-1 flex-grow">
            <label className="text-xs text-secondary">{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="rounded px-3 py-1 dark:bg-[#2b2b2b] border border-secondary/40"
            />
        </div>
    )
}
