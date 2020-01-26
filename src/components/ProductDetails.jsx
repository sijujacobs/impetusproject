import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../redux/actions/index';

const ProductDetails = (props) => {

    const addToCartHandler = (selectedProduct) => {

        console.log(' addToCartHandler :: props.cartItems : ', props.cartItems);
        
        let itemFound = props.cartItems.find(function(item) {
            return item.id === selectedProduct.id;
        });
        if(itemFound && itemFound.id > 0){
            alert("Item already added to Cart");
        }else{
            props.addToCart(props.product);
        }

    }

    return(<div className="productDetails">
            <div className="productImage">
                <img  alt="productImage" src={props.product.thumbnailUrl}/>
            </div>
            <div className="productDesc">
                {props.product.title.substring(0, 10)}
            </div>
            <div className="buttonSection">
                <button className="button" onClick={() => addToCartHandler(props.product)}>Add to Cart</button>
            </div>
        </div>)
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart : (selectedProduct) => dispatch(addToCart(selectedProduct))
    }
}

const connectedProductDetails = connect(null, mapDispatchToProps)(ProductDetails);
export default connectedProductDetails;