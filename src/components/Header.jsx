/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-wrap-multilines */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  
  render() {
    return (
      <div>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/products">Products</NavLink>
        <NavLink exact to="/contacts">Contacts</NavLink>
      </div>
    );
  }
}
