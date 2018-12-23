import * as constants from "../ActionTypes/ProductPage";
import { errorTrue, errorFalse } from './errorAction';
import { addCartCreator, deleteCartCreator } from './Cart';

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

export const getNextProduct = id => dispatch => {
  let status;
  let custom = `${id+1}`;
  fetch(`http://localhost:3001/posts/${custom}`)
    .then(responce => {
      status = responce.status;
      return responce.json();
    })
    .then(products => 
    {
      if (status >= 400 && status < 500) {
        errorTrue(dispatch, status);
      }
      dispatch(getNextProductCreator(products));
      dispatch(errorFalse());
      console.log('fire! plus', custom);
    }
    )
};

export const getPrevProduct = id => dispatch => {
  let status;
  let custom = `${id-1}`;
  fetch(`http://localhost:3001/posts/${custom}`)
    .then(responce => {
      status = responce.status;
      return responce.json();
    })
    .then(products => 
    {
      if (status >= 400 && status < 500) {
        errorTrue(dispatch, status);
      }
      dispatch(getPrevProductCreator(products));
      dispatch(errorFalse());
      console.log('fire! minus', custom);
    }
    )
};

export const addCart = payload => dispatch => {
  dispatch(addCartCreator(payload));
};

export const delCart = payload => dispatch => {
  dispatch(deleteCartCreator(payload));
};