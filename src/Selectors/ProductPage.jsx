import { createSelector } from "reselect";

const products = (state, props) => {
  const id = props.match.params.id;
  return { ProductList: [...state], id: Number(id) };
};

export const productSelector = createSelector(
  products,
  productsWithId =>
    productsWithId.ProductList.find(item => item.id === productsWithId.id)
);
