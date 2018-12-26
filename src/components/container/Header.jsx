import { connect } from 'react-redux';

import Header from '../Header';
import { getTotalPrice } from '../../Selectors/Cart';

const mapStateToProps = state => ({
  showCart: state.Cart,
  totalPrice: getTotalPrice(state)
})

export default connect(
  mapStateToProps,
  null
  )(Header);
