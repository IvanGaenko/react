import { connect } from 'react-redux';

import Cart from '../Cart';
import { delCart } from "../../../ActionCreators/ProductPage";


const mapStateToProps = state => ({
  showCart: state.Cart
})

const mapDispatchToProps = dispatch => ({
  delCart: (payload) => dispatch(delCart(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Cart);
