import { createSelector } from 'reselect';

const cartSelector = state => state.Cart;

export const getTotalPrice = createSelector(
  cartSelector,
  data => data.reduce((sum, item) => sum + item.price, 0)
);

