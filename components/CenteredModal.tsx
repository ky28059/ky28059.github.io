import type { ReactNode } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';


// A reusable component to wrap a transition and dialog overlay around a screen-centered div.
type CenteredModalProps = {
    isOpen: boolean,
    onClose: () => void,
    className: string,
    children: ReactNode
}

export default function CenteredModal(props: CenteredModalProps) {
    return (
        <Dialog
            className="fixed z-40 inset-0 flex items-center justify-center"
            open={props.isOpen}
            onClose={props.onClose}
        >
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-black/40 transition duration-300 data-closed:duration-200 ease-out data-closed:ease-in data-closed:opacity-0"
            />

            <DialogPanel
                transition
                className={props.className + ' transition duration-300 data-closed:duration-200 ease-out data-closed:ease-in data-closed:scale-95 data-closed:opacity-0'}
            >
                {props.children}
            </DialogPanel>
        </Dialog>
    )
}
