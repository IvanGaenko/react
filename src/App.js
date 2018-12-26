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
