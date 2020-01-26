import React from 'react';

import {connect} from 'react-redux';
const Header = (props) => {
    
    return(<div className="header">
                <div className="logoSection">IMPETUS</div>
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