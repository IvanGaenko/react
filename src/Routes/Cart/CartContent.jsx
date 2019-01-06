import React, { Component } from "react";
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class CartContent extends Component {
  deleteCart = () => {
    const { delCart, id } = this.props;
    delCart(id);
  }

  render() {
    const { id, title, author, price, myCurrency } = this.props;

    const currencyPrice = myCurrency.currentCurrency.map(item => {
      return (
        <TableCell key={item.mark}>
          {item.mark} {price * item.value}
        </TableCell>
      )
    });
    return (
      <Paper>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Link to={`/posts/${id}`}>
                {title}
              </Link>
            </TableCell>
            <TableCell>{author}</TableCell>
            {currencyPrice}
            <TableCell>
              <Button
                id="cart-delete"
                variant="contained"
                color="secondary"
                onClick={this.deleteCart}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </Paper>
    )
  }
}

export default CartContent;

CartContent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  myCurrency: PropTypes.object.isRequired
};
