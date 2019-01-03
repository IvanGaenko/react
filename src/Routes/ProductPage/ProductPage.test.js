import React from "react";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import  ProductPage  from "./ProductPage";

describe("ProductPage", () => {
  const props = {
    singleProduct: {
    id: 1,
    title: "title",
    author: "author",
    img: "img",
    price: "100",
    year: "1920",
    },
    getSingleProduct: jest.fn(),
    addCart: jest.fn(),
    match: { params: { itemId: 1 } },
    myCurrency: {
      currentCurrency: [{
      "mark": "USD",
      "value": 1
    }]}
  };

  let component;
  beforeEach(() => {
    component = mount(
      <BrowserRouter>
        <ProductPage {...props} />
      </BrowserRouter>
    );
  });

  it("Should render correctly", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <ProductPage {...props} />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should renders product descriptions", () => {
    const typography = component.find("Typography");
    expect(typography.at(0).text()).toBe(props.singleProduct.title);
    expect(typography.at(1).text()).toBe(props.singleProduct.author);
    expect(typography.at(2).text()).toBe(`Year: ${props.singleProduct.year}`);
    expect(typography.at(3).text())
    .toBe(`Price: ${props.myCurrency.currentCurrency[0].mark + " " + props.singleProduct.price}`);
    expect(typography.children().length).toBe(4);
  });

  it("Should call function getSingleProduct in componentDidMount", () => {
    expect(props.getSingleProduct).toBeCalled();
  });

  it("Call function addToCart on click button 'Add to Cart'", () => {
    expect(props.addCart).not.toBeCalled();
    component.find("Button#add-cart").simulate("click");
    expect(props.addCart).toBeCalled();
  });
});
