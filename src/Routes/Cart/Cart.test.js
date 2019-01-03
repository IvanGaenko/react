import React from 'react';
import { shallow } from "enzyme";
import Cart from "./Cart";

const props = {
  showCart: [{
    id: 1, title: "Hello"
  }],
  myCurrency: {
    currentCurrency: [{
    "mark": "USD",
    "value": 1
  }]}
};

describe("Cart", () => {

  let component;
  beforeEach(() => {
    component = shallow(<Cart {...props} />);
  });

  it("Should renders 3 children if cart is empty", () => {
    const emptyProps = {
      showCart: [],
      myCurrency: {
        currentCurrency: [{
        "mark": "USD",
        "value": 1
      }]}
    };
    component = shallow(<Cart {...emptyProps} />);
    expect(component.children().length).toBe(3);
  });

  it("Should renders 2 children if cart is not empty", () => {
    expect(component.children().length).toBe(2);
    expect(component).toBeTruthy();
  });

  it("Should render length of products in cart", () => {
    let products = [
      { id: 2, title: "How" },
      { id: 3, title: "Are" },
      { id: 4, title: "You" }
    ];
    component.setProps({ showCart: products });
    expect(component.find("#cart-list").children().length).toBe(
      products.length + 1 
    );
  });
});
