import {ReactNode} from 'react';
import CfSidebar from './CfSidebar';
import CfHeader from './CfHeader';


export default function CfLayout(props: {children: ReactNode}) {
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
