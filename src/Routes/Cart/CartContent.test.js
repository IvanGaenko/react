import React from 'react';
import { shallow } from 'enzyme';
import CartContent from './CartContent';

const props = {
  author: "author",
  title: "title",
  price: "100",
  id: 1,
  currencyPrice: "100",
  delCart: jest.fn(),
  myCurrency: {
    currentCurrency: [{
    "mark": "USD",
    "value": 1
  }]}
};

describe("CartContent", () => {
  let component;

  beforeEach(() => {
    component = shallow(<CartContent {...props} />);
  });

  it("Should render correct product", () => {
    const tableCell = component.find("WithStyles(TableCell)");
    expect(tableCell.at(0).childAt(0).childAt(0).text()).toBe(props.title);
    expect(tableCell.at(1).childAt(0).text()).toBe(props.author);
    expect(tableCell.at(2).childAt(2).text()).toBe(props.price);
    expect(tableCell.at(2).childAt(0).text()).toBe(props.myCurrency.currentCurrency[0].mark);
  });

  it('Call function delCart on click', () => {
    component.find('#cart-delete').simulate('click');
    expect(props.delCart).toBeCalled();
  });
});
