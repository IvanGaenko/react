/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Header from './containers/Header';
import Main from './containers/Main';
import storeCreator from './store';

const store = storeCreator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
