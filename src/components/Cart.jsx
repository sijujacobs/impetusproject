import React from 'react';

import {connect} from 'react-redux';
import CartItem from './CartItem';


const Cart = (props) => {

    return(<div className="cart">
            {
                (props.cartItems && props.cartItems.length > 0) && 
                props.cartItems.map(p => <CartItem key={p.id} item={p}/>)
            }
        </div>)
}

const mapStateToProps = (state) => {
    return {
        cartItems : state.cartReducer.cartItems
    }
}

const connectedCart = connect(mapStateToProps)(Cart);
export default connectedCart;