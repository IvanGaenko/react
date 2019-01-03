import * as constants from "../ActionTypes/Cart";
import { addCart, delCart } from './Cart';

describe('actions', () => {
  it('should create an action to addCart', () => {
    const payload = 'Finish docs'
    const expectedAction = {
      type: constants.ADD_TO_CARD,
      payload
    }
    expect(addCart(payload)).toEqual(expectedAction)
  });

  it('should create an action to delCart', () => {
    const payload = 'Finish docs'
    const expectedAction = {
      type: constants.REMOVE_FROM_CARD,
      payload
    }
    expect(delCart(payload)).toEqual(expectedAction)
  });
});