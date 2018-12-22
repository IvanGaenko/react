import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';

class ProductList extends Component {
  render() {
    const { id, title, author } = this.props;
    const img = `https://picsum.photos/300/300/?image=${id*10}`;
    return (
      <div>
        <div>Id: {id}</div>
        <div>Title: {title}</div>
        <div>Author: {author}</div>
        <img src={img} alt={id}/>
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
