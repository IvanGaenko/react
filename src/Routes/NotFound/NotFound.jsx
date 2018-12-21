import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {

  // componentDidMount() {
  //   this.props.errorLoad(this.props.isError);
  // }

  componentWillUnmount() {
    console.log("jkdhkdfjhjk")
  }

  render() {
    return (
      <div>
        <h1>NotFound</h1>
        <Link to="/"><button>Home</button></Link>
      </div>
    )
  }
}
