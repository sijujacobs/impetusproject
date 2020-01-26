import {GET_PHOTOS, ADD_TO_CART, REMOVE_ITEM} from '../constants/index';
import axios from 'axios';

export const getPhotos = () => {

    let pList = [
        {
          "albumId"     : 1,
          "id"          : 1,
          "title"       : "accusamus beatae ad facilis cum similique qui sunt",
          "url"         : "https://via.placeholder.com/600/92c952",
          "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
          "albumId"     : 1,
          "id"          : 2,
          "title"       : "reprehenderit est deserunt velit ipsam",
          "url"         : "https://via.placeholder.com/600/771796",
          "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
          "albumId"     : 1,
          "id"          : 3,
          "title"       : "osijufficia porro iure quia iusto qui ipsa ut modi",
          "url"         : "https://via.placeholder.com/600/24f355",
          "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        }
    ];
    return {
        type : GET_PHOTOS,
        payload : pList
    }
}

export const getPhotosByThunkAxios = () => {
  return (dispatch) => {
    return axios.get("https://jsonplaceholder.typicode.com/photos")
            // .then(response => {dispatch(fetchDataFormReslt(response.data))})
            .then(response => dispatch({ type: 'GET_PHOTOS', payload: response.data.splice(4900) }))
            .catch(err => {console.log("getPhotosByThunkAxios :: ERROR : ", err)})
  }
}

// const fetchDataFormReslt = (data) => {
//   return{
//     type : GET_PHOTOS,
//     payload : data
//   }
// }



export const addToCart = (selectedItem) => {
  return {
    type    : ADD_TO_CART,
    payload : selectedItem
  }
}

export const removeItem = (selectedItem) => {
  return {
    type    : REMOVE_ITEM,
    payload : selectedItem
  }
}

