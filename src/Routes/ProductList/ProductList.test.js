import React from 'react';
import { shallow } from 'enzyme';
import ProductList from './ProductList';
import ProductCard from './ProductCard';

const props = {
  addProducts: {
    products: [],
  },
  page: 1,
  limit: 2,
  getProducts: jest.fn()
};

const fullProps = {
  addProducts: {
    products: [{id: 1}],
  },
  page: 1,
  limit: 2,
  getProducts: jest.fn()
};

describe('ProductList', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ProductList {...props} />);    
  });

  it('Should render component ProductList', () => {
    expect(component).toBeTruthy();
    expect(component.children().length).toBe(2);
  });

  it('renders ProductCard components', () => {
    component = shallow(<ProductList {...fullProps} />);
    expect(component.find(ProductCard)).toBeTruthy();
    expect(component.find(ProductCard).length).toBe(1);
  });

  it('Test click event', () => {
    component.find('#mybutton').simulate('click');
    expect(props.getProducts).toHaveBeenCalled();
  });

  it('Should fetch products', () => {
    expect(props.getProducts).toBeCalledTimes(5);
  });
});
