import * as constants from "../ActionTypes/errorType";

const initialState = '';

export default function errorRuducer (state = initialState, action) {
  const {type, payload} = action;
  
  switch (type) {
    case constants.ERROR_TRUE:
      return payload;
    
    case constants.ERROR_FALSE:
    return '';
  
    default:
    return state;
  }
}
