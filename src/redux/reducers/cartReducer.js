import {GET_CART_ITEMS, ADD_TO_CART, REMOVE_ITEM} from '../constants/index';

const initialState = {
    cartItems : []
}
const cartReducer = (state = initialState, action) => {
    console.log(' cartReducer :: AddToCart : state - ', state, ', action - ', action);
            
    switch(action.type){
        case GET_CART_ITEMS:
            return Object.assign({}, state, {cartItems: state.cartItems.concat(action.payload)});
        case ADD_TO_CART:
            return Object.assign({}, state, {cartItems: state.cartItems.concat(action.payload)});
        case REMOVE_ITEM:
            return Object.assign({}, state, {cartItems: state.cartItems.filter(item => action.payload.id !== item.id)});
        default:
            return state;
    }
}

export default cartReducer;