/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../App';
import Layout from '../Layout';


describe('App', () => {
  let component;

  beforeEach(() => {
    component = mount(<App />);
  });

  it('Should render App component', () => {
    expect(component).toBeTruthy();
  });

  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Layout)).toBeTruthy();
  });
});
