import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import ProductPageContent from './ProductPageContent';
import SnackbarModal from './SnackbarModal';

const styles = () => (
  {
    root: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: 1200,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    container: {
      maxWidth: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex'
    }
  }
);

class ProductPage extends Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };
  
  componentDidMount() {
    const { getSingleProduct, match } = this.props;
    getSingleProduct(match.params.id);
  }

  addToCart = () => {
    const { addCart, singleProduct } = this.props;
    addCart(singleProduct);
    this.handleClick();
  }

  nextCart = () => {
    const { getNextProduct, singleProduct } = this.props;
    getNextProduct(singleProduct.id);
  }

  prevCart = () => {
    const { getPrevProduct, singleProduct } = this.props;
    getPrevProduct(singleProduct.id);
  }

  render() {
    const { classes, currencyArticle, currencyValue } = this.props;
    const { id, price } = this.props.singleProduct;

    const currencyPrice = `${currencyArticle + " " + (price * currencyValue)}`;
    return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div>
          <Link to={`/posts/${id - 1}`}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.prevCart}>
              Prev
            </Button>
          </Link>

          <Link to="/posts/">
            <Button
              variant="contained"
              color="primary">
              Back
            </Button>
          </Link>
        </div>

        <ProductPageContent
          currencyPrice={currencyPrice}
          singleProduct={this.props.singleProduct}
          addToCart={this.addToCart}
        />
      
        <Link to={`/posts/${id + 1}`}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.nextCart}>
            Next
          </Button>
        </Link>
      </div>

      <SnackbarModal
        singleProduct={this.props.singleProduct}
        handleClose={this.handleClose}
        open={this.state.open}
      />
    </div>
  )}
};

export default withStyles(styles)(ProductPage);

ProductPage.propTypes = {
  classes: PropTypes.object.isRequired,
  singleProduct: PropTypes.object.isRequired,
  getSingleProduct: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  addCart: PropTypes.func.isRequired
};
