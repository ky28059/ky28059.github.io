import React from 'react';
import Header from './Header';


type LayoutProps = {children: React.ReactNode};
export default function Layout(props: LayoutProps) {
    return (
        <div>
            <Header />
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}
