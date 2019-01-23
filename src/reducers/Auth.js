import * as constants from "../ActionTypes/Auth";

const initialState = { isAuthenticated: false };
// const initialState = {};

export default function authentication (state = initialState, action) {
  const {type, payload} = action;
console.log('payload', payload);
console.log('state', state);

  switch (type) {
    case constants.LOGIN:
    return {
      login: payload.login,
      password: payload.password,
      isAuthenticated: payload.auth
    };

    case constants.LOGOUT:   
      return {
        isAuthenticated: false
      }
    
    default:
      return state;
  }
}
