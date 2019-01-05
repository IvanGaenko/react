import { connect } from 'react-redux';

import Cart from '../Cart';
import { delCart } from "../../../ActionCreators/Cart";
import { getTotalCurrency } from '../../../Selectors/Cart';

const mapStateToProps = state => ({
  showCart: state.Cart,
  getTotalCurrency: getTotalCurrency(state),
  myCurrency: state.Currency
})

const mapDispatchToProps = dispatch => ({
  delCart: (payload) => dispatch(delCart(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Cart);
  