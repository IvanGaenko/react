import { connect } from "react-redux";

import ProductPage from "../ProductPage";
import { getSingleProduct } from "../../../ActionCreators/ProductPage";
import { productSelector } from "../../../Selectors/ProductPage";

const mapStateToProps = (state, props) => ({
  singleProduct: productSelector(state.ProductList.products, props) || state.ProductPage,
  error: state.errorReducer
});

const mapDispatchToProps = dispatch => ({
  getSingleProduct: (products) => dispatch(getSingleProduct(products))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
