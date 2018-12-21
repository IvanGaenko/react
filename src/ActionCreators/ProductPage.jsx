import * as constants from "../ActionTypes/ProductPage";
import errorLoad from './errorAction';

export const getSingleProductCreator = (products) => {
  return {
    type: constants.GET_SINGLE_ITEM,
    payload: 
      products
  }
};

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const getSingleProduct = id => dispatch => {
  fetch(`http://localhost:3001/posts/${id}`)
    .then(handleErrors)
    .then(responce => responce.json())
    .then(products => dispatch(getSingleProductCreator(products)))
    .catch(err => dispatch(errorLoad(true)));   
};
