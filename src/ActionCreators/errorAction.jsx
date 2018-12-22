import * as constants from "../ActionTypes/errorType";

export const ErrorTrueCreator = payload => ({
  type: constants.ERROR_TRUE,
  payload
});

export const ErrorFalseCreator = payload => ({
  type: constants.ERROR_FALSE,
  payload
});

export const errorTrue = (dispatch, payload) => {
  dispatch(ErrorTrueCreator(payload));
};

export const errorFalse = () => {
  return dispatch =>
    dispatch({
      type: constants.ERROR_FALSE
    });
};

export default errorTrue;