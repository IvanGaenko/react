import * as constants from "../ActionTypes/Currency";

const initialState = {
  currency: [],
  currentCurrency: []
}

export default function products (state = initialState, action) {
  const {type, payload} = action;
  
  switch (type) {
    case constants.GET_CURRENCY:
      return {
        ...state,
        currency: payload
      };
    
    case constants.SET_CURRENCY:
      if (state.currentCurrency.length === 0 || typeof(payload) === 'object') {
        return {
          ...state,
          currentCurrency: [payload[0]]
          }; 
      }
      return {
        ...state,
        currentCurrency: [state.currency.find(item => item.mark === payload)]
        };
          
    default:
      return state;
  }
}
