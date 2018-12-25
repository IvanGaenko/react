import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Error extends Component {
  componentWillUnmount() {
    this.props.errorFalse();
  }

  render() {
    console.log('works!', this.props.error);
    
    if (this.props.error) {
      return <Redirect to="/notfound" />;
    }
    this.props.errorFalse();
    return null;
  }
}

export default Error;
