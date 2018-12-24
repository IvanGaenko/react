import * as constants from "../ActionTypes/Cart";

const initialState = [];

export default function cart (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {

    case constants.ADD_TO_CARD:

        if (state.find(item => item.id === payload.id)) {
          return [
            ...state
          ]
        } else {
          return [
            ...state,
            payload
          ]
        } 
      // if (state.includes(payload)) {
      //   return [
      //     ...state
      //   ]
      // } else {
      //   return [
      //     ...state,
      //     payload
      //   ]
      // }
    
    case constants.REMOVE_FROM_CARD:   
      return state.filter(item => item.id !== payload);
    
    default:
      return state;
  }
}
