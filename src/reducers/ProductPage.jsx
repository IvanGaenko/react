import * as constants from "../ActionTypes/ProductPage";

const initialState = {
  name: 'Ivan'
};

const productDetails = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case constants.GET_SINGLE_ITEM: 
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};

export default productDetails;
