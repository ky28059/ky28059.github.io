'use client'


type FilterInputProps = {
    name: string,
    count: number,
    filter: Set<string>,
    setFilter: (s: Set<string>) => void
}
export default function FilterCheckbox(props: FilterInputProps) {
    const active = props.filter.size === 0 || props.filter.has(props.name);

    function toggleInput() {
        if (props.filter.has(props.name))
            props.filter.delete(props.name);
        else
            props.filter.add(props.name);

        console.log(props.filter)
        props.setFilter(new Set(props.filter));
    }

    return (
        <div className="flex gap-2 items-center">
            <input
                className="accent-grapefruit"
                type="checkbox"
                id={`category-${props.name}`} // TODO
                name={`category-${props.name}`}
                checked={props.filter.has(props.name)}
                onChange={toggleInput}
            />
            <label
                className={'transition duration-200 text-primary' + (active ? '' : ' opacity-50')}
                htmlFor={`category-${props.name}`}
            >
                {props.name}{' '}
                <span className="font-jetbrains text-xs font-semibold text-grapefruit bg-grapefruit/25 rounded-full px-1.5 py-0.5">
                    {props.count}
                </span>
            </label>
        </div>
    )
}
