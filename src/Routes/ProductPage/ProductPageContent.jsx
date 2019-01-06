import React, { Component } from "react";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = () => (
  {
    card: {
      minWidth: 700,
      maxWidth: 1000,
      marginRight: 40,
      marginLeft: 40,
      marginBottom:30
    },
    media: {
      height: 800,
      width: 1000,
      paddingTop: '56.25%', // 16:9
    },
    button: {
      minWidth: '100%',
    },
  }
);

class ProductPageContent extends Component {

  render() {
    const { classes, currencyPrice, addToCart } = this.props;
    const { id, title, author, image, year } = this.props.singleProduct;
      return (
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={image}
            title={id}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {title}
            </Typography>
            <Typography gutterBottom variant="headline" component="h2">
              {author}
            </Typography>
            <Typography component="p">
              Year: {year}
            </Typography>
            <Typography  component="p">
              Price: {currencyPrice}
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              id="add-cart"
              className={classes.button}
              size="small" color="primary"
              onClick={addToCart}
            >
              Buy
            </Button>
          </CardActions>
        </Card>
    )
  }
};

export default withStyles(styles)(ProductPageContent);

ProductPageContent.propTypes = {
  classes: PropTypes.object.isRequired,
  currencyPrice: PropTypes.string.isRequired,
  singleProduct: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired
};
