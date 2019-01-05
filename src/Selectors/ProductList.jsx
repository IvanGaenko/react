import { createSelector } from 'reselect';

const currencySelector = state => state.Currency.currentCurrency;
const priceSelector = state => state.ProductList.products;

export const getCurrencyValue = createSelector(
  currencySelector,
  data => data.map(item => {
    return item.value;
  }));

export const getCurrencyArticle = createSelector(
  currencySelector,
  data => data.map(item => {
    return item.mark;
  }));

export const getPriceValue = createSelector(
  priceSelector,
  getCurrencyArticle,
  getCurrencyValue,
  (data, currencyMark, currencyValue) => data.map(item => {
    return `${currencyMark + " " + (item.price * currencyValue)}`;
  }));
