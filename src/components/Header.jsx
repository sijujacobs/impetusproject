import React from 'react';
import {NavLink} from "react-router-dom";

import {connect} from 'react-redux';
const Header = (props) => {

    return (<div className="header">
        <div className="menuBar">
            <ul className="navMenu">
                <li><NavLink exact to="/">Homes</NavLink></li>
                <li><NavLink exact to="/cartProject">Project</NavLink></li>
                <li><NavLink to="/docs">Docs</NavLink></li>
            </ul>
        </div>
        <div className="statusSection">
            <span className="cartStatus">{props.cartItems.length + " : Items"}</span>
        </div>
    </div>)
}
const mapStateToProps = (state) => {
    return {
        cartItems : state.cartReducer.cartItems
    }
}

const connectedHeader = connect(mapStateToProps)(Header);
export default connectedHeader;