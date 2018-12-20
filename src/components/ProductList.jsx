import React, { Component } from "react";
import Button from '@material-ui/core/Button';

class ProductList extends Component {
  render() {
    const { id, title, author } = this.props;
    return (
      <div>
        <div>Id: {id}</div>
        <div>Title: {title}</div>
        <div>Author: {author}</div>
        <Button variant="contained" color="primary">
              Hello World
            </Button>
      </div>
    )
  }
}

export default ProductList;
