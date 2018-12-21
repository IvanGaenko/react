/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Router from './Router';
import NotFound from './Routes/NotFound/NotFound';

class Layout extends Component {  
  render() {
    console.log(this.props.errorLoad);
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          {this.props.errorLoad ? <NotFound /> : <Router />}
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Layout;
