import { connect } from 'react-redux';

import Layout from '../../../Layout';
// import { fetchProducts } from '../../../ActionCreators/errorAction';

const mapStateToProps = state => ({
  errorLoad: state.errorReducer.isError,
})

export default connect(mapStateToProps, null)(Layout);
