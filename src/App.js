import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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

configure({ adapter: new Adapter() });