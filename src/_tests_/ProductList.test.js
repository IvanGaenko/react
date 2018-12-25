import React from "react";
import { shallow } from "enzyme";

import ProductList from "../Routes/ProductList/ProductList";
import ProductCard from "../Routes/ProductList/ProductCard";

const props = {
  loadProducts: jest.fn()
};

describe("ProductList", () => {
  let component;

  beforeEach(() => {
    component = shallow(<ProductList {...props} />);
  });

  it("Should render component ProductList", () => {
    console.log(component.debug());
    expect(component).toBeTruthy();
  });

  it('renders ProductCard components', () => {
    const wrapper = shallow(<ProductList />);
    expect(wrapper.find(ProductCard)).toBeTruthy();
  });
});
