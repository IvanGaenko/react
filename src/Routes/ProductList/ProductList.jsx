import React, { Component } from 'react';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
  
  componentDidMount() {
    if (this.props.addProducts.products.length === 0) {
      this.loadProducts();
    }
  }

  loadProducts = () => {
    this.props.getProducts(this.props.limit, this.props.page);
  };

  render() {    
    return (
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
  }
}
