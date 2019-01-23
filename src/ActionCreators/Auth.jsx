import * as constants from "../ActionTypes/Auth";

export const loginCreator = payload => ({
  type: constants.LOGIN,
    payload
});

export const logoutCreator = payload => ({
  type: constants.LOGOUT,
    payload
});
