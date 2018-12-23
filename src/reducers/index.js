import { combineReducers } from 'redux';

import ProductList from './ProductList';
import ProductPage from './ProductPage';
import errorReducer from './errorReducer';
import Cart from './Cart';

export default combineReducers({
  ProductList,
  ProductPage,
  errorReducer,
  Cart
});
