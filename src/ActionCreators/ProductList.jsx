import * as constants from "../ActionTypes/ProductList";
import { errorTrue } from './errorAction';

export const getProducts = products => {
  return {
    type: constants.ADD_ITEM,
    payload: {
      products
    }
  }
};

export const setPage = (page, limit) => {
  return {
    type: constants.SET_PAGE,
    payload: page, limit
  }
}

export const fetchProducts = (limit, page) => dispatch => {
  let status;
  // return blabla(limit, page)
  fetch(`http://localhost:3001/posts?_limit=${limit}&_page=${page}`)
  .then(response => {
    status = response.status;
    return response.json();
  })
  .then(data => 
    {
      if (status >= 400 && status < 500) {
        dispatch(errorTrue(status));
    }
    dispatch(getProducts(data));
    dispatch(setPage(page+1));
  })
};
