import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import ProductList from './Routes/ProductList/container/ProductList';
import ProductPage from './Routes/ProductPage/container/ProductPage';
import Home from './Routes/Home/Home';
import Contacts from './Routes/Contacts/Contacts';
import NotFound from './Routes/NotFound/NotFound';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/posts" component={ProductList} exact />
        <Route path="/posts/:id" component={ProductPage} exact />
        <Route path="/contacts" component={Contacts} exact />
        <Route path="/notfound" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Router;
