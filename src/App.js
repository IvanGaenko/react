import React, { Component } from 'react';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';

import './App.css';
import storeCreator from './store';
import Layout from './Layout';
import { saveState } from './localstorage/localstorage';

const store = storeCreator();

store.subscribe(throttle(() => {
  saveState(
    store.getState().Cart,
    store.getState().Currency
    );
}, 1000));

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
