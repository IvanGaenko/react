import * as constants from "../ActionTypes/errorType";

const initialState = {
  isError: false,
}

export default function errorRuducer (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case constants.IS_ERROR:
      return {
        isError: payload,
      }
    
    default:
      return state;
  }
}
