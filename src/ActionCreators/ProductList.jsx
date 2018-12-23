import * as constants from "../ActionTypes/ProductList";
// import { addCartCreator } from './Cart';

export const getProducts = (products) => {
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

export const addCartCreator = payload => {
  return {
    type: constants.ADD_TO_CARD,
    payload
  }
};

export const fetchProducts = (limit, page) => (dispatch) => {
  fetch(`http://localhost:3001/posts?_limit=${limit}&_page=${page}`)
  .then(responce => {
    return responce.json();
  })
  .then(data => dispatch(getProducts(data)))
  .then(data => dispatch(setPage(page+1)))
  .catch(err => console.log(err));
  console.log('fetch!');
};

export const addCart = payload => dispatch => {
  dispatch(addCartCreator(payload));
};
