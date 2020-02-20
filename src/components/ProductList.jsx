import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPhotosByThunkAxios } from "../redux/actions/index";
import Loader from "../components/Loader";

import ProductDetails from "./ProductDetails";

const ProductList = props => {
  const { loading, photos, getPhotosByThunkAxios } = props;

  useEffect(() => {
    getPhotosByThunkAxios();
  }, [getPhotosByThunkAxios]);

  let renderElement = <div>Test</div>;

  if (loading) {
    renderElement = <Loader />;
  } else {
    renderElement = (
      <div className="productList">
        <div className="sectionHeader">Product List</div>
        {photos &&
          photos.length > 0 &&
          photos.map(p => (
            <ProductDetails
              key={p.id}
              product={p}
              cartItems={props.cartItems}
            />
          ))}
      </div>
    );
  }
  return renderElement;
  // return (
  //   <div className="productList">
  //     <div className="sectionHeader">Product List</div>
  //     {photos &&
  //       photos.length > 0 &&
  //       photos.map(p => (
  //         <ProductDetails key={p.id} product={p} cartItems={props.cartItems} />
  //       ))}
  //   </div>
  // );
};

const mapStateToProps = state => {
  return {
    photos: state.photoReducer.photos,
    loading: state.photoReducer.loading,
    cartItems: state.cartReducer.cartItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getPhotosByThunkAxios: () => dispatch(getPhotosByThunkAxios())
  };
};

const connectedProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
export default connectedProductList;
