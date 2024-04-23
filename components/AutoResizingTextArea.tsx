'use client'

import { TextareaHTMLAttributes, useLayoutEffect, useRef } from 'react';


export default function AutoResizingTextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const { onChange, ...textAreaProps } = props;

    useLayoutEffect(() => {
        resize();
    }, []);

    // <textarea> auto-resizing
    // https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize
    function resize() {
        const textArea = textAreaRef.current;
        if (!textArea) return;
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + 8 + 'px';
    }

    return (
        <textarea
            ref={textAreaRef}
            onChange={(e) => {
                onChange?.(e);
                resize()
            }}
            {...textAreaProps}
        />
    )
}
