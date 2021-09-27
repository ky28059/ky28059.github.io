import {useRef} from 'react';

export default function Counter() {
    const inputRef = useRef<HTMLInputElement>(null); // inputRef.current: HTMLInputElement

    return (
        <div>
            <input ref={inputRef} value="Focus me!"/>
            <button onClick={() => inputRef.current?.focus()}>Focus</button>
        </div>
    )
}

