import {
  GET_PHOTOS,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from "../constants/index";

const initialState = {
  photos: [],
  loading: false
};
const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: true
        // photos: action.payload.products
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    case GET_PHOTOS:
      return {
        photos: action.payload
      };
    default: {
      return state;
    }
  }
  // if(action.type === GET_PHOTOS){
  //     return Object.assign({}, state, {photos : state.photos.concat(action.payload)});
  // }
  // return state;
};

export default photoReducer;
