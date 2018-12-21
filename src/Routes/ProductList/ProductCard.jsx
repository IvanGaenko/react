import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';

class ProductList extends Component {
  render() {
    const { id, title, author } = this.props;
    return (
      <div>
        <div>Id: {id}</div>
        <div>Title: {title}</div>
        <div>Author: {author}</div>
        {/* <img src="http://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG10530.png" alt=""/> */}
        <NavLink exact to={`/posts/${id}`}>
          <Button variant="contained" color="primary">
            Details
          </Button>
        </NavLink>
      </div>
    )
  }
}

export default ProductList;
