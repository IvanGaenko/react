import * as constants from "../ActionTypes/ProductPage";

const productDetails = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    
    case constants.GET_SINGLE_ITEM: 
      return {
        ...state,
        ...payload
      };

    case constants.GET_NEXT_ITEM: 
      return {
        ...state,
        ...payload
      };

    case constants.GET_PREV_ITEM: 
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};

export default productDetails;
