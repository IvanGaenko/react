import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class CartContent extends Component {

  deleteCart = () => {
    this.props.delCart(this.props.id)
  }

  render() {
    const { id, title, author, price } = this.props; 
    return (
      <div>
        <Link to={`/posts/${id}`}>
          <div>Title: {title}</div>
        </Link>
        <div>Author: {author}</div>
        <div>Price: {price}</div>
        <Button variant="contained" color="primary" onClick={this.deleteCart}>
              Delete
          </Button>
      </div>
    )
  }
}

export default CartContent;
