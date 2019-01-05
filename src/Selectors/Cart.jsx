import { createSelector } from 'reselect';
import { getCurrencyArticle, getCurrencyValue } from './ProductList';

const cartSelector = state => state.Cart;

const getTotalPrice = createSelector(
  cartSelector,
  data => data.reduce((sum, item) => sum + item.price, 0)
);

export const getTotalCurrency = createSelector(
  getTotalPrice,
  getCurrencyArticle,
  getCurrencyValue,
  (price, article, value) => {
    return `${article + " " + (price * value)}`;
  }
)
