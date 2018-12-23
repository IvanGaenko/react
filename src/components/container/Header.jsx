import { connect } from 'react-redux';

import Header from '../Header';

const mapStateToProps = state => ({
  showCart: state.Cart
})

export default connect(
  mapStateToProps,
  null
  )(Header);
