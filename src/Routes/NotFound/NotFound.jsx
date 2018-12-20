import React, { Component } from 'react';
import { 
  // BrowserRouter,
  // Route,
  // Switch,
  NavLink,
 } from 'react-router-dom';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <p>NotFound</p>
        <NavLink to="/"><button>Home</button></NavLink>
      </div>
    )
  }
}
