import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';

class ProductPage extends Component {
  
  componentDidMount() {
    if (Object.keys(this.props.singleProduct).length === 0)
      this.props.getSingleProduct(this.props.match.params.id);
  }

  render() {
    const { id, title, author } = this.props.singleProduct;
    const { error } = this.props;
    const img = `https://picsum.photos/300/300/?image=${id*10}`;
      return error ? (<Redirect to="/notfound" />) : (<div>
        <Link to={`/posts/`}>
          <Button variant="contained" color="primary">
            Back
          </Button>
        </Link>
        {title}
        {author}
        <img src={img} alt={id}/>
        <Button variant="contained" color="primary">
          Buy
        </Button>
      </div>)
     }
  };

export default ProductPage;
