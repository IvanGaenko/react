import * as constants from "../ActionTypes/Currency";
import { getCurrency, setCurrency } from './Currency';

describe('actions', () => {
  it('should create an action to getCurrency', () => {
    const payload = 'Finish docs'
    const expectedAction = {
      type: constants.GET_CURRENCY,
      payload
    }
    expect(getCurrency(payload)).toEqual(expectedAction)
  });

  it('should create an action to setCurrency', () => {
    const payload = 'Finish docs'
    const expectedAction = {
      type: constants.SET_CURRENCY,
      payload
    }
    expect(setCurrency(payload)).toEqual(expectedAction)
  });
});