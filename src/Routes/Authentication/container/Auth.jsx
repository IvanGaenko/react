import { connect } from 'react-redux';

import Login from '../Login';
import { loginCreator, logoutCreator } from '../../../ActionCreators/Auth';

const mapStateToProps = (state, props) => ({
  isAuthenticated: state.Authentication.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  login: (payload) => dispatch(loginCreator(payload)),
  logout: () => dispatch(logoutCreator())
  })

export default connect(mapStateToProps, mapDispatchToProps)(Login);