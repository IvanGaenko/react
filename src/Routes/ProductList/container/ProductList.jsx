import { connect } from 'react-redux';

import ProductList from '../ProductList';
import { fetchProducts } from '../../../ActionCreators/ProductList';
import { fetchCurrency } from '../../../ActionCreators/Currency';
import { addCart } from '../../../ActionCreators/Cart';

const mapStateToProps = state => ({
  addProducts: state.ProductList,
  page: state.ProductList.page,
  limit: state.ProductList.limit,
  currency: state.Currency
})

const mapDispatchToProps = dispatch => ({
    getProducts: (limit, page) => dispatch(fetchProducts(limit, page)),
    addCart: (payload) => dispatch(addCart(payload)),
    fetchCurrency: (payload) => dispatch(fetchCurrency(payload))
  })

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
