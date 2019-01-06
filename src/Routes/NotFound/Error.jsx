import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class Error extends Component {
  componentWillUnmount() {
    const { errorFalse } = this.props;
    errorFalse();
  }

  render() {
    const { error, errorFalse } = this.props;
    if (error) {
      return <Redirect to="/notfound" />;
    }
    errorFalse();
    return null;
  }
}

export default Error;

Error.propTypes = {
  error: PropTypes.string.isRequired,
  errorFalse: PropTypes.func.isRequired
};
