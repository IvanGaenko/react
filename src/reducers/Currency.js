import * as constants from "../ActionTypes/Currency";

const initialState = {
  currency: [],
  currentCurrency: []
}

export default function products (state = initialState, action) {
  const {type, payload} = action;
  
  switch (type) {
    case constants.GET_CURRENCY:
    console.log('g-state', state);
    
      return {
        ...state,
        currency: payload
      };
    
    case constants.SET_CURRENCY:
      return {
        ...state,
        currentCurrency: [payload]
        };
          
    default:
      return state;
  }
}
