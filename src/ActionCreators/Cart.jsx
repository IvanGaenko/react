import * as constants from "../ActionTypes/Cart";

export const addCart = payload => ({
  type: constants.ADD_TO_CARD,
  payload
});

export const delCart = payload => ({
  type: constants.REMOVE_FROM_CARD,
    payload
});
