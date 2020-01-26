import {GET_PHOTOS} from '../constants/index';


const initialState = {
    photos : []
}
const photoReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PHOTOS:
            return {
                photos : action.payload
            };
        default:{
            return state;
        }

    }
    // if(action.type === GET_PHOTOS){
    //     return Object.assign({}, state, {photos : state.photos.concat(action.payload)});
    // }
    // return state;
}

export default photoReducer;



