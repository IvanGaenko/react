/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import storeCreator from './store';
import Layout from './Layout';

const store = storeCreator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

export default App;
