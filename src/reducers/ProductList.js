import * as constants from "../ActionTypes/ProductList";

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
        }
    ;
    
    default:
      return state;
  }
}
