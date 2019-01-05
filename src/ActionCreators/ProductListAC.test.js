import * as constants from "../ActionTypes/ProductList";
import { getProducts, setPage } from './ProductList';

describe('actions', () => {
  it('should create an action to getProducts', () => {
    const products = 'Finish docs';
    const expectedAction = {
      type: constants.ADD_ITEM,
      payload: { products }
    }
    expect(getProducts(products)).toEqual(expectedAction)
  });

  it('should create an action to setPage', () => {
    const page = 1;
    const limit = 2;
    const expectedAction = {
      type: constants.SET_PAGE,
      payload: page, limit
    }
    expect(setPage(page, limit)).toEqual(expectedAction)
  });
});