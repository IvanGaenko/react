import { connect } from "react-redux";

import ProductPage from "../ProductPage";
import { getSingleProduct } from "../../../ActionCreators/ProductPage";

const mapStateToProps = state => ({
  singleProduct: state.ProductPage
});

const mapDispatchToProps = dispatch => ({
  getSingleProduct: (products) => dispatch(getSingleProduct(products))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
