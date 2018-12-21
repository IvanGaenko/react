import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

class ProductPage extends Component {
  
  componentDidMount() {
      this.props.getSingleProduct(this.props.match.params.id);
  }

  render() {
    const { singleProduct } = this.props;
    console.log(singleProduct);
      return (<div>
        <Link to={`/posts/`}>
          <Button variant="contained" color="primary">
            Back
          </Button>
        </Link>
        {singleProduct.title}
        {singleProduct.author}
        {singleProduct.name}
        <Button variant="contained" color="primary">
          Buy
        </Button>
      </div>)
     }
  };

export default ProductPage;
