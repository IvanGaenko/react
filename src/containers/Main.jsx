import { connect } from 'react-redux';

import Main from '../components/Main';
import { fetchProducts } from '../reducers/products';

const mapStateToProps = state => ({
  products: state.products,
})

const mapDispatchToProps = dispatch => ({
    getProducts: (limit, page) => dispatch(fetchProducts(limit, page))
  })

export default connect(mapStateToProps, mapDispatchToProps)(Main);
