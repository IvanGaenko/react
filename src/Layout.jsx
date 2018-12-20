/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './containers/Header';
import Router from './Router';

class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <Router />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Layout;