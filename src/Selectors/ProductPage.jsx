import { createSelector } from "reselect";

const products = (state, props) => {
  const id = props.match.params.id;
  return { ProductList: [...state], id: Number(id) };
};

export const productSelector = createSelector(  
  products,
  products => products.ProductList.find(item => item.id === products.id)
);
    