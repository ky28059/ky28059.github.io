import React from 'react';
import {Link, Route} from "react-router-dom";


const HeaderItem = (props) => {
    let {to, name, exact} = props;

    return (
        <Route exact={exact} path={to}>
            {({match}) => (
                // If current path matches what the Route points towards, give it the "active" class
                <span className={`item ${match ? "active" : ""}`}>
                    <Link to={to}>
                        {name}
                    </Link>
                </span>
            )}
        </Route>
    )
}

export default HeaderItem;