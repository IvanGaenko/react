import { connect } from 'react-redux';

import Header from '../Header';
import { getTotalPrice } from '../../Selectors/Cart';
import { fetchCurrency, setCurrency } from '../../ActionCreators/Currency';

const mapStateToProps = state => ({
  showCart: state.Cart,
  totalPrice: getTotalPrice(state),
  currency: state.Currency
})

const mapDispatchToProps = dispatch => ({
  fetchCurrency: (payload) => dispatch(fetchCurrency(payload)),
  setCurrency: (payload) => dispatch(setCurrency(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Header);
