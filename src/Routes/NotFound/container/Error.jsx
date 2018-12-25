import { errorFalse } from "../../../ActionCreators/errorAction";
import { connect } from "react-redux";
import Error from "../Error";

const mapStateToProps = state => ({
  error: state.errorReducer,
});

const mapDispatchToProps = dispatch => ({
  errorFalse: () => dispatch(errorFalse())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Error);
