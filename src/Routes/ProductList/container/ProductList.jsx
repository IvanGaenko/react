import { connect } from 'react-redux';

import ProductList from '../ProductList';
import { fetchProducts } from '../../../ActionCreators/ProductList';
import { addCart } from '../../../ActionCreators/Cart';

const mapStateToProps = state => ({
  addProducts: state.ProductList,
  page: state.ProductList.page,
  limit: state.ProductList.limit,
  myCurrency: state.Currency
})

const mapDispatchToProps = dispatch => ({
    getProducts: (limit, page) => dispatch(fetchProducts(limit, page)),
    addCart: (payload) => dispatch(addCart(payload))
  })

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
