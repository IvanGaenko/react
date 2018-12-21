import * as constants from "../ActionTypes/ProductPage";

export const getSingleProductCreator = (products) => {
  return {
    type: constants.GET_SINGLE_ITEM,
    payload: 
      products
    
  }
};

export const getSingleProduct = id => dispatch => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then(responce => responce.json())
      .then(products =>
        dispatch(getSingleProductCreator(products)))
      .catch(err => console.log(err));
  };