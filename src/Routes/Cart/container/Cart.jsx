import { connect } from 'react-redux';

import Cart from '../Cart';
import { delCart } from "../../../ActionCreators/Cart";
import { getTotalPrice } from '../../../Selectors/Cart';

const mapStateToProps = state => ({
  showCart: state.Cart,
  totalPrice: getTotalPrice(state)
})

const mapDispatchToProps = dispatch => ({
  delCart: (payload) => dispatch(delCart(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Cart);
  