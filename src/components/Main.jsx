/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-wrap-multilines */
import React, { Component } from 'react';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';

const initialState = {
  limit: 2,
  page: 1,
};
export default class Main extends Component {
  state = initialState;

  componentDidMount() {
    this.props.getProducts(this.state.limit, this.state.page);
    this.props.getProducts(initialState);

  }

  componentWillUnmount() {
    this.setState(initialState);
  }

  onClick = () => {
    let { limit, page } = this.state;
    const { getProducts } = this.props;
    page = page + 1;
    this.setState(() => ({ limit, page }), getProducts(limit, page));
  };

  static defaultProps = { products: [] };

  render() {
    console.log(this.props.products);
    return (<div>
      {this.props.products.map((item) => {
        return (
          <div key={item.id}>
            {item.id}
            {item.title}
            {item.author}
            <Button variant="contained" color="primary">
              Hello World
            </Button>
          </div>
        )
      })}
      <button onClick={this.onClick}>Show more</button>
    </div>)
  }
}
