import * as constants from "../ActionTypes/ProductPage";
import { errorTrue, errorFalse } from './errorAction';

export const getSingleProductCreator = products => {
  return {
    type: constants.GET_SINGLE_ITEM,
    payload: 
      products
  }
};

export const getNextProductCreator = products => {
  return {
    type: constants.GET_NEXT_ITEM,
    payload: 
      products
  }
};

export const getPrevProductCreator = products => {
  return {
    type: constants.GET_PREV_ITEM,
    payload: 
      products
  }
};

export const getSingleProduct = id => dispatch => {
  let status;
  fetch(`http://localhost:3001/posts/${id}`)
    .then(response => {
      status = response.status;
      return response.json();
    })
    .then(products => 
    {
      if (status >= 400 && status < 500) {
        dispatch(errorTrue(status));
      }
      dispatch(getSingleProductCreator(products));
      dispatch(errorFalse());
    }
    );
};

export const getNextProduct = id => dispatch => {
  let status;
  let custom = `${id+1}`;
  fetch(`http://localhost:3001/posts/${custom}`)
    .then(response => {
      status = response.status;
      return response.json();
    })
    .then(products => 
    {
      if (status >= 400 && status < 500) {
        dispatch(errorTrue(status));
      }
      dispatch(getNextProductCreator(products));
      dispatch(errorFalse());
    })
};

export const getPrevProduct = id => dispatch => {
  let status;
  let custom = `${id-1}`;
  fetch(`http://localhost:3001/posts/${custom}`)
    .then(response => {
      status = response.status;
      return response.json();
    })
    .then(products => 
    {
      if (status >= 400 && status < 500) {
        dispatch(errorTrue(status));
      }
      dispatch(getPrevProductCreator(products));
      dispatch(errorFalse());
    })
};
