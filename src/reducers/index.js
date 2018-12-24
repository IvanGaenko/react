import { combineReducers } from 'redux';

import ProductList from './ProductList';
import ProductPage from './ProductPage';
import errorReducer from './errorReducer';

export default combineReducers({
  ProductList,
  ProductPage,
  errorReducer
});
