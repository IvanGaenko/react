import React, { Component } from 'react';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import ProductCard from './ProductCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

class ProductList extends Component {
  state={
    isLoading: true,
  }

  componentDidMount() {
    if (this.props.addProducts.products.length === 0) {
      this.loadProducts();
    }
    this.setState({ isLoading: false });
  }

  loadProducts = () => {
    this.props.getProducts(this.props.limit, this.props.page);
  };

  render() {
    const { classes } = this.props;
    return ((this.state.isLoading) ? (
      <CircularProgress className={classes.progress} />
      ) : (
        <div className="container">
          <div className="product-list">
            {this.props.addProducts.products.map((item) => {
              return (
                <ProductCard
                key={item.id}
                {...item}
                addCart={this.props.addCart}
                />
              )
            })}
          </div>
          <div className="product-list-button">
            <Button
              variant="outlined"
              color="primary"    
              onClick={this.loadProducts}>
                Show more
            </Button>
          </div>
        </div>
        )
      )
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductList);