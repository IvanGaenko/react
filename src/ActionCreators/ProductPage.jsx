import * as constants from "../ActionTypes/ProductPage";
import { errorTrue, errorFalse } from './errorAction';

export const getSingleProductCreator = (products) => {
  return {
    type: constants.GET_SINGLE_ITEM,
    payload: 
      products
  }
};

export const getSingleProduct = id => dispatch => {
  let status;
  fetch(`http://localhost:3001/posts/${id}`)
    .then(responce => {
      status = responce.status;
      return responce.json();
    })
    .then(products => 
    {
      if (status >= 400 && status < 500) {
        errorTrue(dispatch, status);
      }
      dispatch(getSingleProductCreator(products));
      dispatch(errorFalse());
    }
    );
};
