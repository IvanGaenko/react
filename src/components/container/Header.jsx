import { connect } from 'react-redux';

import Header from '../Header';
import { getTotalCurrency } from '../../Selectors/Cart';
import { fetchCurrency, setCurrency } from '../../ActionCreators/Currency';

const mapStateToProps = state => ({
  showCart: state.Cart,
  getTotalCurrency: getTotalCurrency(state),
  currency: state.Currency,
  isAuthenticated: state.Authentication
})

const mapDispatchToProps = dispatch => ({
  fetchCurrency: (payload) => dispatch(fetchCurrency(payload)),
  setCurrency: (payload) => dispatch(setCurrency(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Header);
