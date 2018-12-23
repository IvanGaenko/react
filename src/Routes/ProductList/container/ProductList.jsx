import { connect } from 'react-redux';

import ProductList from '../ProductList';
import { fetchProducts, addCart } from '../../../ActionCreators/ProductList';

const mapStateToProps = state => ({
  addProducts: state.ProductList,
  page: state.ProductList.page,
  limit: state.ProductList.limit
})

const mapDispatchToProps = dispatch => ({
    getProducts: (limit, page) => dispatch(fetchProducts(limit, page)),
    addCart: (payload) => dispatch(addCart(payload))
  })

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
