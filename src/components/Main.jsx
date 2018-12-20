import React, { Component } from 'react';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import ProductList from './ProductList';

export default class Main extends Component {
  componentDidMount() {
    if (this.props.addProducts.products.length === 0) {
      this.loadProducts();
    }
  }

  loadProducts = () => {
    this.props.getProducts(this.props.limit, this.props.page);
  };

  render() {
    console.log(this.props.addProducts);
    return (<div>
      {this.props.addProducts.products.map((item) => {
        return (
          <div key={item.id}>
            <ProductList id={item.id} {...item} />
          </div>
        )
      })}
      <Button
      variant="contained"
      color="primary"    
      onClick={this.loadProducts}>
      Show more
      </Button>
    </div>)
  }
}
