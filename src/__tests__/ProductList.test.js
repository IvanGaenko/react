import React from 'react';
import { shallow } from 'enzyme';
import { ProductList } from '../Routes/ProductList/ProductList';
import ProductCard from '../Routes/ProductList/ProductCard';

const props = {
  addProducts: {
    products: [{ id: 1 }],
  },
  page: 1,
  limit: 2,
  getProducts: jest.fn(),
  addCart: jest.fn(),
};


describe('ProductList', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ProductList {...props} />);
  });

  it('Should render component ProductList', () => {
    expect(component).toBeTruthy();
  });

  it('renders ProductCard components', () => {
    expect(component.find(ProductCard)).toBeTruthy();
  });

  it('Test click event', () => {
    component.find('#mybutton').simulate('click');
    expect(props.getProducts).toHaveBeenCalled();
  });
});
