import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ProductCard from './ProductCard';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

export class ProductList extends Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    const { products } = this.props.addProducts;
    if (products.length === 0) {
      this.loadProducts();
    }
    this.setState({ isLoading: false });
  }

  loadProducts = () => {
    const {getProducts, limit, page} = this.props;
    getProducts(limit, page);
  };

  render() {
    const { addProducts } = this.props;
    const { addCart } = this.props;
    // return ((this.state.isLoading) ? (
    //   <CircularProgress className={classes.progress} />
    //   ) : (
        return ((<div className="container">
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
      )
  }
}

// ProductList.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(ProductList);
