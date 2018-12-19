/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-wrap-multilines */
import React, { Component } from 'react';

export default class Main extends Component {
  state = {
    limit: 2,
    page: 1,
  };

  componentDidMount() {
    this.props.getProducts(this.state.limit, this.state.page);
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
          </div>
        )
      })}
      <button onClick={this.onClick}>Show more</button>
    </div>)
  }
}
