import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';

const styles = () => (
  {
    root: {
    flexGrow: 1,
    marginBottom: 50
    },
    flex: {
      flex: 1,
    },
    margin: {
      margin: 5,
    },
  }
);

class Header extends Component {

  headElement = (content, link) => {
    return (<Typography variant="title" color="inherit" className={this.props.classes.flex}>
    <NavLink exact to={`/${link}`}>{content}</NavLink>
  </Typography>)
  };
  
  productCount = (cartCount) => {
    const showCartCount = this.props.showCart.length;
    let product = (showCartCount > 1) ? ('products') : ('product');
    return (
      (showCartCount === 0) ? (
        <Typography variant="title" color="inherit" className={this.props.classes.flex}>
          Cart is empty
        </Typography>
      ) : (
        <div>
          <p>You have {cartCount} {product} in cart.</p>
          <p>Total cost is ${this.countSum()}.</p>
        </div>
      )
    )
  }

  countSum = () => {
    let bank = [];
    const stateCart = this.props.showCart;
    for (let i = 0; i < stateCart.length; i++) {
      bank.push(stateCart[i].price);
    };
    let totalBank = bank.reduce((first, second) => first + second, 0);
    return totalBank;
  }

  render() {
    const { classes } = this.props;
    const showCartCount = this.props.showCart.length;
    return (
      <header className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {this.headElement('Home', '')}
            {this.headElement('Products', 'posts')}
            {this.headElement('Contacts', 'contacts')}
            <Badge color="primary" badgeContent={showCartCount} className={classes.margin}>
              {this.headElement('Cart', 'cart')}
            </Badge>
            <span>
              {this.productCount(showCartCount)}
            </span>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
