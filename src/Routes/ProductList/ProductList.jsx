import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ProductCard from './ProductCard';

class ProductList extends Component {
    
  componentDidMount() {
    const { products } = this.props.addProducts;
    const {getProducts, limit, page} = this.props;

    if (products.length === 0) {
      getProducts(limit, page);
    }
  }

  loadProducts = () => {
    const {getProducts, limit, page} = this.props;
    getProducts(limit, page);
  };

  render() {
    const { addProducts, addCart, myCurrency } = this.props;
    return (<div className="container">
      <div className="product-list">
        {addProducts.products.map((item) => {
          return (
            <ProductCard
              key={item.id}
              {...item}
              addCart={addCart}
              myCurrency={myCurrency}
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
