import React, { Component } from "react";
import CartContent from './CartContent';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Cart extends Component {
  
  countSum = () => {
    const bank = [];
    const stateCart = this.props.showCart;
    for (let i = 0; i < stateCart.length; i++) {
      bank.push(stateCart[i].price);
    };
    let totalBank = bank.reduce((first, second) => first + second, 0);
    return totalBank;
  }

  render() {
    return (
      this.props.showCart.length === 0) ? (
      <div>
        <h1>Cart is empty</h1>
        <div>Do you want to look at our products?</div>
        <Link to={`/posts/`}>
          <Button variant="contained" color="primary">
            Go to products
          </Button>
        </Link>
      </div>
      ) : (
        <div>
          {this.props.showCart.map(item => {
            return (
              <CartContent
                key={item.id}
                {...item}
                delCart={this.props.delCart}/>
            )
          })}
          <Typography gutterBottom variant="headline" component="h2">
            Total sum: ${this.countSum()}
          </Typography>
        </div>
      );
  };
};

export default Cart;
