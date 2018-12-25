import React from 'react';
import App from '../App';
import Layout from '../Layout';
import { mount, shallow } from 'enzyme';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = mount(<App />);
  })

  it('Should render App component', () => {
  console.log(component.debug());
  expect(component).toBeTruthy();
  });

  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Layout)).toBeTruthy();
  });
});
