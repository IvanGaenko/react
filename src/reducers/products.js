import * as constants from "../constants";

const initialState = {
  limit: 2,
  page: 1,
  products: []
}

export default function products (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case constants.ADD_ITEM:
      return {
        ...state,
        products: [
          ...state.products,
          ...payload.products
        ]
      };
    
    case constants.SET_PAGE:
      return {
        ...state,
        page: payload,
        limit: payload
        }
    ;
    
    default:
      return state;
  }
}

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

export const fetchProducts = (limit, page) => (dispatch) => {
  fetch(`http://localhost:3001/posts?_limit=${limit}&_page=${page}`)
  .then(responce => responce.json())
  .then(data => dispatch(getProducts(data)))
  .then(data => dispatch(setPage(page+1)))
  .catch(err => console.log(err));
  console.log(page);
};