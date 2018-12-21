import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';

class ProductPage extends Component {
  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.id);
  }

  render() {
    const { singleProduct } = this.props;

    return (
      <div>
        <NavLink exact to={`/posts/`}>
        <Button variant="contained" color="primary">
          Back
        </Button>
        </NavLink>
        {singleProduct.title}
        {singleProduct.author}
        {singleProduct.name}
        <Button variant="contained" color="primary">
          Buy
        </Button>
      </div>
    )
  }
}

export default ProductPage;
