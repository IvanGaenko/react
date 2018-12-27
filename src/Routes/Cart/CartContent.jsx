import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

class CartContent extends Component {
  deleteCart = () => {
    const { delCart, id } = this.props;
    delCart(id);
  }

  render() {
    const { id, title, author, price } = this.props; 
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
            <TableCell>${price}</TableCell>
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

Enzyme.configure({ adapter: new Adapter() });
