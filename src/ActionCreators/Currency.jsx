import * as constants from "../ActionTypes/Currency";
import { errorTrue } from './errorAction';

export const getCurrency = (payload) => {
  return {
    type: constants.GET_CURRENCY,
    payload
  }
};

export const setCurrency = (payload) => {
  return {
    type: constants.SET_CURRENCY,
    payload
  }
}

export const fetchCurrency = () => dispatch => {
  let status;
  fetch("http://localhost:3001/currency")
  .then(response => {
    status = response.status;
    return response.json();
  })
  .then(data => 
    {
      if (status >= 400 && status < 500) {
        dispatch(errorTrue(status));
    }
    dispatch(getCurrency(data));
  })
};
