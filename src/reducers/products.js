import * as constants from "../constants";

export default function products (state = [], action) {
  const {type, payload} = action;

  switch (type) {
    case constants.ADD_ITEM:
    return [ ...state, ...payload ];
  
    default:
      return state;
  }
}

export const getProducts = (payload) => {
  return {type: constants.ADD_ITEM, payload}
};

export const fetchProducts = (limit, page) => (dispatch) => {
    fetch(`http://localhost:3001/posts?_limit=${limit}&_page=${page}`)
    .then(responce => responce.json())
    .then(data => dispatch(getProducts(data)));
  };
