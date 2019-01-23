import { connect } from 'react-redux';

import Router from './Router';
import { loginCreator } from './ActionCreators/Auth';

const mapStateToProps = state => ({
  isAuthenticated: state.Authentication.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  login: (payload) => dispatch(loginCreator(payload))
  })

export default connect(mapStateToProps, mapDispatchToProps)(Router);