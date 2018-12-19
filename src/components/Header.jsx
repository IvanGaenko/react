/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-wrap-multilines */
import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: true,
    };
  }

  render() {
    const { cart } = this.state;
    return <div>
      Hello
      {cart}
    </div>;
  }
}
// "eslint-config-airbnb": "^17.1.0",
