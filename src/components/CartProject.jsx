import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

const CartProject = props => {
  return (
    <div className="projectContainer">
      <ProductList />
      <Cart />
    </div>
  );
};

export default CartProject;
