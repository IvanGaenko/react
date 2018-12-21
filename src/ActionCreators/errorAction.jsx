import * as constants from "../ActionTypes/errorType";

const errorLoad = isError => {
  return {
    type: constants.IS_ERROR,
    payload: isError
  };
};

export default errorLoad;