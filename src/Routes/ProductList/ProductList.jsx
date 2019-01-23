import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import ProductCard from './ProductCard';

// const test = {
//   title: 'title',
//   author: 'author',
//   year: 2019,
//   image: 'image',
//   price: 1000
// };

class ProductList extends Component {
    
  componentDidMount() {
    const { products } = this.props.addProducts;
    const {getProducts, limit, page} = this.props;

    if (products.length === 0) {
      getProducts(limit, page);
    }
    // this.posts();
  }

  // posts = () => {
  //   fetch('http://localhost:3000/api/posts', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(test)
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(JSON.stringify(data)));
  // };

  // del = () => {
  //   fetch('http://localhost:3000/api/posts/23', {
  //     method: 'DELETE',
  //     // headers: {
  //     //   'Content-Type': 'application/json',
  //     // },
  //     // body: JSON.stringify(test)
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(JSON.stringify(data)));
  // };

  loadProducts = () => {
    const {getProducts, limit, page} = this.props;
    getProducts(limit, page);
    // this.del();
  };

  render() {
    const { addProducts, addCart, getPrice } = this.props;
    return (
      <div className="container">
        <div className="product-list">
          {addProducts.products.map((item) => {
            return (
              <ProductCard
                key={item.id}
                {...item}
                addCart={addCart}
                getPrice={getPrice}
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

export default ProductList;

ProductList.propTypes = {
  addProducts: PropTypes.object.isRequired,
  limit: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  getProducts: PropTypes.func.isRequired
};
