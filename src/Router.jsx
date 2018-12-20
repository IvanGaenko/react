/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Main from './containers/Main';
// import ProductPage from './containers/ProductPage';
import Home from './Home';
import Contacts from './Contacts';
import NotFound from './NotFound';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/products" component={Main} exact />
        {/* <Route path="/products/:id" component={ProductPage} exact /> */}
        <Route path="/contacts" component={Contacts} exact />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Router;
