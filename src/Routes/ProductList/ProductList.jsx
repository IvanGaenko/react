import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ProductCard from './ProductCard';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

export class ProductList extends Component {
    
  componentDidMount() {
    const { products } = this.props.addProducts;
    const {getProducts, limit, page, fetchCurrency, currency} = this.props;
    
    if (products.length === 0) {
      getProducts(limit, page);
    }

    if (currency.currency.length === 0) {
      fetchCurrency();
    }
  }

  loadProducts = () => {
    const {getProducts, limit, page} = this.props;
    getProducts(limit, page);
    console.log(this.props.currency);

  };

  render() {
    const { addProducts, addCart } = this.props;
    return (<div className="container">
      <div className="product-list">
        {addProducts.products.map((item) => {
          return (
            <ProductCard
              key={item.id}
              {...item}
              addCart={addCart}
            />
          )
        })}
      </div>
      <div className="product-list-button">
        <Button
          id="mybutton"
          variant="outlined"
          color="primary"    
          onClick={this.loadProducts}
        >
          Show more
        </Button>
      </div>
    </div>
    )
  }
}

export default withStyles(styles)(ProductList);
