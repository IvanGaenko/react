import { combineReducers } from 'redux';

import ProductList from './ProductList';
import ProductPage from './ProductPage';
import errorReducer from './errorReducer';
import Currency from './Currency';
import Cart from './Cart';

export default combineReducers({
  ProductList,
  ProductPage,
  errorReducer,
  Cart,
  Currency
});
