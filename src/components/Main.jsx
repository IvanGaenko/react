/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-wrap-multilines */
import React, { Component } from 'react';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';

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
            {item.id}
            {item.title}
            {item.author}
            <Button variant="contained" color="primary">
              Hello World
            </Button>
          </div>
        )
      })}
      <button onClick={this.loadProducts}>Show more</button>
    </div>)
  }
}
