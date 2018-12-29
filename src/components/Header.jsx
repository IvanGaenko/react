import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
  state = {
    age: '',
    // name: 'hai',
    // labelWidth: 0,
  };

  componentDidMount() {
    const { fetchCurrency, currency } = this.props;
    if (currency.currency.length === 0) {
    fetchCurrency();
    console.log('header fetch mount');
    }
  };

  updateCurrency = () => {
    this.props.setCurrency(this.state.age);
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    this.updateCurrency();
  };

  headElement = (content, link) => {
    return (<Typography variant="title" color="inherit" className={this.props.classes.flex}>
    <NavLink exact to={`/${link}`}>{content}</NavLink>
  </Typography>)
  };
  
  productCount = (cartCount) => {
    console.log('curency currency', this.props.currency.currency);
    console.log('current currency', this.props.currency.currentCurrency);
    // console.log('state', this.state);
    console.log('age', this.state.age);

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
          <p>Total cost is ${this.props.totalPrice}.</p>
        </div>
      )
    )
  }

  render() {
    const { classes } = this.props;
    const showCartCount = this.props.showCart.length;

    // const { currency } = this.props.currency;
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


            <FormControl className={classes.formControl}>
              <Select
                native
                value={this.state.age}
                onChange={this.handleChange('age')}
                inputProps={{
                  name: 'age',
                  id: 'age-native-simple',
                }}
              >
                <option value="USD">USD</option>;
                <option value="UAH">UAH</option>;

              </Select>
            </FormControl>
                
            
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
