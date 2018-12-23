import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/container/Header';
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
