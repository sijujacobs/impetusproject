import React from 'react';
import {connect} from 'react-redux';
import ProductDetails from './ProductDetails';
//

const ProductList = (props) => {
    return(<div className="productList">
        {
            (props.photos && props.photos.length > 0) && 
            props.photos.map(p => <ProductDetails key={p.id} product={p} cartItems={props.cartItems}/>)}
    </div>)
}

const mapStateToProps = (state) => {
    return {
        photos : state.photoReducer.photos,
        cartItems : state.cartReducer.cartItems
    }
}


const connectedProductList = connect(mapStateToProps)(ProductList);
export default connectedProductList;