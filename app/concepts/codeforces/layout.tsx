import {ReactNode} from 'react';
import CfHeader from './CfHeader';
import CfSidebar from './CfSidebar';


export default function Layout(props: {children: ReactNode}) {
    return (
        <div className="container pb-24">
            <CfHeader />
            <div className="flex gap-6">
                <main className="flex-grow">
                    {props.children}
                </main>
                <CfSidebar />
            </div>
        </div>
    )
}
