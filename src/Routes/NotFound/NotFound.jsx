import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <p>NotFound</p>
        <Link to="/"><button>Home</button></Link>
      </div>
    )
  }
}
