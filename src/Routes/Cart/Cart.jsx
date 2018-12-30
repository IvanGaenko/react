import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CartContent from './CartContent';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

export class Cart extends Component {
  render() {
    const { totalPrice, showCart, delCart, myCurrency } = this.props;
    const currencyPrice = myCurrency.currentCurrency.map(item => {
      return (
        <Typography key={item.mark} gutterBottom variant="headline" component="h2">
        Total cost is: {item.mark} {totalPrice * item.value}
        </Typography>
      )
    });
    return (
      showCart.length === 0) ? (
        <div>
          <h1>Cart is empty</h1>
          <div>Do you want to look at our products?</div>
          <Link to="/posts/">
            <Button id="cart-go-products" variant="contained" color="primary">
              Go to products
            </Button>
          </Link>
        </div>
      ) : (
        <div id="cart-list">
          {showCart.map(item => (
            <CartContent
              key={item.id}
              {...item}
              delCart={delCart}
              myCurrency={myCurrency}
            />
          ))}
          {currencyPrice}
        </div>
      );
  }
}

export default Cart;
