import React from 'react';
import { shallow } from 'enzyme';
import CartContent from '../Routes/Cart/CartContent';

const props = {
  author: "autor",
  title: "title",
  price: "100",
  id: 1,
  currencyPrice: "100",
  delCart: jest.fn()
};

describe("CartContent", () => {
  let component;

  beforeEach(() => {
    component = shallow(<CartContent {...props} />);
    console.log(component.debug());
    
  });

  // it("Should render correct product", () => {
  //   const tableCell = component.find("WithStyles(TableCell)");
  //   expect(tableCell.at(0).childAt(0).childAt(0).text()).toBe(props.title);
  //   expect(tableCell.at(1).childAt(0).text()).toBe(props.author);
  //   expect(tableCell.at(2).childAt(1).text()).toBe(props.price);
  // });

  it('Call function delCart on click', () => {
    component.find('#cart-delete').simulate('click');
    expect(props.delCart).toBeCalled();
  });
});
