import React from 'react';

import { connect } from 'react-redux';
import { removeItem } from '../redux/actions/index';

const CartItem = (props) => {
    const removeItemHandler = (selectedProduct) => {
        props.removeItem(selectedProduct);
    }
    return (<div className="cartItem fadeItem">
                <div className="itemImage">
                    <img alt="itemImage" src={props.item.thumbnailUrl} />
                </div>
                <div className="itemDesc">
                    {props.item.title.substring(0, 10)}
                </div>
                <div className="buttonSection">
                    <button className="button" onClick={() => removeItemHandler(props.item)}>Remove</button>
                </div>
            </div>)
}



const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (selectedProduct) => dispatch(removeItem(selectedProduct))
    }
}

const connectedCartItem = connect(null, mapDispatchToProps)(CartItem);
export default connectedCartItem;
