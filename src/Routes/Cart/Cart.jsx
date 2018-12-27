import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CartContent from './CartContent';

class Cart extends Component {
  render() {
    const { totalPrice, showCart, delCart } = this.props;
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
            />
          ))}
          <Typography gutterBottom variant="headline" component="h2">
            Total sum: $
            {totalPrice}
          </Typography>
        </div>
      );
  }
}

export default Cart;
