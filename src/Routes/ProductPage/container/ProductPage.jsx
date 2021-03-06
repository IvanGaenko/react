import { connect } from "react-redux";

import ProductPage from "../ProductPage";
import { addCart } from "../../../ActionCreators/Cart";
import { getSingleProduct, getNextProduct, getPrevProduct } from "../../../ActionCreators/ProductPage";
import { productSelector } from "../../../Selectors/ProductPage";
import { getCurrencyArticle, getCurrencyValue } from "../../../Selectors/ProductList";

const mapStateToProps = (state, props) => ({
  singleProduct: productSelector(state.ProductList.products, props) || state.ProductPage,
  error: state.errorReducer,
  showCart: state.Cart,
  myCurrency: state.Currency,
  currencyArticle: getCurrencyArticle(state),
  currencyValue: getCurrencyValue(state)
});

const mapDispatchToProps = dispatch => ({
  getSingleProduct: (products) => dispatch(getSingleProduct(products)),
  getNextProduct: (products) => dispatch(getNextProduct(products)),
  getPrevProduct: (products) => dispatch(getPrevProduct(products)),
  addCart: (payload) => dispatch(addCart(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
