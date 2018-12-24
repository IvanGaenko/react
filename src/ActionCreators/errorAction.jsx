import * as constants from "../ActionTypes/errorType";

export const errorTrue = payload => ({
  type: constants.ERROR_TRUE,
  payload
});

export const errorFalse = () => ({
  type: constants.ERROR_FALSE
});
