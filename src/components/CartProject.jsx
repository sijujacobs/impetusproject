import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const CartProject = (props) => {
    const topicObject = {
        name : "test",
        age : 12
    }
    return(<div className="projectContainer">
           <ProductList newtopic={topicObject} />
           <Cart />
        </div>)
}

export default CartProject;
