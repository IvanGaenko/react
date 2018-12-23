import * as constants from "../ActionTypes/Cart";

export const addCartCreator = payload => {
  return {
    type: constants.ADD_TO_CARD,
    payload
  }
};

export const deleteCartCreator = payload => {
  return {
    type: constants.REMOVE_FROM_CARD,
    payload
  }
};