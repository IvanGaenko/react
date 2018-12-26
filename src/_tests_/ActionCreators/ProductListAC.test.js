import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchProducts } from '../../ActionCreators/ProductList';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  it('fetch fetchProducts', () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve());
  const store = mockStore({id: 1234, isFetching: false });
  
  store.dispatch(fetchProducts(2, 1))
  const expectedActions = store.getActions();
  expect(expectedActions.length).toBe(0);
  expect(expectedActions).toEqual([]);
  expect(window.fetch).toBeCalled();
    })
  });
