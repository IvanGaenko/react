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

export const addCart = payload => dispatch => {
  dispatch(addCartCreator(payload));
};

export const delCart = payload => dispatch => {
  dispatch(deleteCartCreator(payload));
};
///sdkfsdkf