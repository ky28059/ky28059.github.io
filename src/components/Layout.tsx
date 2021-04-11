import React from 'react';
import Header from './layout/Header';


type LayoutProps = {children: React.ReactNode};
const Layout = (props: LayoutProps) => {
    return (
        <div>
            <Header />
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default Layout;