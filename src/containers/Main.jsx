import { connect } from 'react-redux';

import Header from '../components/Header';

const mapStateToProps = () => ({
  type: 'ADD_VIDEO',
});
const mapDispatchToProps = ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
