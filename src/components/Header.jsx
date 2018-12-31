import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';

import CurrencyHeaderBlock from './CurrencyHeaderBlock';

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
    formControl: {
      margin: 15,
      minWidth: 80,
    }
  }
);

class Header extends Component {

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  };

  handleChange = () => event => {
    const { setCurrency } = this.props;
    setCurrency(event.target.value);
  };

  headElement = (content, link) => {
    return (<Typography variant="title" color="inherit" className={this.props.classes.flex}>
    <NavLink exact to={`/${link}`}>{content}</NavLink>
  </Typography>)
  };
  
  productCount = (cartCount) => {
    const { currency, totalPrice } = this.props;
    const showCartCount = this.props.showCart.length;
    const product = (showCartCount > 1) ? ('products') : ('product');

    const currencyPrice = currency.currentCurrency.map(item => {
      return (
        <p key={item.mark}>
        Total cost is: {item.mark} {totalPrice * item.value}
        </p>
      )
    });
    return (
      (showCartCount === 0) ? (
        <Typography variant="title" color="inherit" className={this.props.classes.flex}>
          Cart is empty
        </Typography>
      ) : (
        <div>
          <p>You have {cartCount} {product} in cart.</p>
          {currencyPrice}
        </div>
      )
    )
  }

  render() {   
    const { classes, currency, setCurrency } = this.props;
    const showCartCount = this.props.showCart.length;
    return (
      <header className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {this.headElement('Home', '')}
            {this.headElement('Products', 'posts')}
            {this.headElement('Contacts', 'contacts')}
            <Badge
              color="primary"
              badgeContent={showCartCount}
              className={classes.margin}
            >
              {this.headElement('Cart', 'cart')}
            </Badge>
            <span>
              {this.productCount(showCartCount)}
            </span>
            <CurrencyHeaderBlock
              handleChange={this.handleChange}
              currency={currency}
              setCurrency={setCurrency}
            />
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
