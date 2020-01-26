import React from 'react';
import {NavLink} from "react-router-dom";
const Header = (props) => {

    return (<div className="header">
        <ul className="navMenu">
            <li><NavLink exact to="/">Homes</NavLink></li>
            <li><NavLink exact to="/cartProject">Project</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="statusSection">
            <span className="cartStatus"></span>
        </div>
    </div>)
}

export default Header;