import {ReactNode} from 'react';
import {Metadata} from 'next';


export const metadata: Metadata = {
    title: {
        template: '%s | RabbitSign',
        default: 'RabbitSign'
    }
}

export default function Layout(props: {children: ReactNode}) {
    return props.children;
}
