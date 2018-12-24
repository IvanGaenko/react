import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

const styles = () => (
  {
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    card: {
      minWidth: 400,
      maxWidth: 400,
      marginRight: 20,
      marginBottom:50
    },
    media: {
      height: 300,
      paddingTop: '56.25%', // 16:9
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    close: {
      padding: 20,
    }
  }
);

class ProductCard extends Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  addToCart = () => {
    this.props.addCart(this.props);
    this.handleClick();
  }

  render() {
    const { classes } = this.props;
    const { id, title, author, image, price, year } = this.props;
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={image}
            title={id}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="headline"
              component="h2">
              {title}
            </Typography>
            <Typography
              gutterBottom
              variant="headline"
              component="h2">
              {author}
            </Typography>
            <Typography
              component="p">
              Year: {year}
            </Typography>
            <Typography
              component="p">
              Price: ${price}
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small" color="primary" onClick={this.addToCart}>
              Buy
            </Button>
            <Link to={`/posts/${id}`}>
              <Button size="small" color="primary">
                Details
              </Button>
            </Link>
          </CardActions>
        </Card>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={this.state.open}
          autoHideDuration={4000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={
          <span id="message-id">
            <div>{this.props.title}</div>
            <div>{this.props.author}</div>
            <div>added to Cart</div>
          </span>
          }
          action={[
            <Button key="undo" color="inherit" size="small" onClick={this.handleClose}>
              Close
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}>
            </IconButton>,
          ]}
        />
      </div>
    )
  }
}

export default withStyles(styles)(ProductCard);

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
