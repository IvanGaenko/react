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
      alignItems: 'center',
      maxWidth: 1200,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    container: {
      maxWidth: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex'
    },
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
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    button: {
      minWidth: '100%',
    },
    close: {
      padding: 20,
    },
    progress: {
      margin: 500,
    },
  }
);

class ProductPage extends Component {
  state = {
    open: false,
    isLoading: true
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
  
  componentDidMount() {
    const { getSingleProduct } = this.props;
    getSingleProduct(this.props.match.params.id);
    this.setState({ isLoading: false});
  }

  addToCart = () => {
    const { addCart, singleProduct } = this.props;
    addCart(singleProduct);
    this.handleClick();
  }

  nextCart = () => {
    const { getNextProduct, singleProduct } = this.props;
    getNextProduct(singleProduct.id);
  }

  prevCart = () => {
    const { getPrevProduct, singleProduct } = this.props;
    getPrevProduct(singleProduct.id);
  }

  render() {
    const { classes, myCurrency } = this.props;
    const { id, title, author, image, price, year } = this.props.singleProduct;
    
    const currencyPrice = myCurrency.currentCurrency.map(item => {
      return (
        <Typography key={item.mark} component="p">
        Price: {item.mark} {price * item.value}
        </Typography>
      )
    });
      return (<div className={classes.root}>
        <div className={classes.container}>
        <div>
          <Link to={`/posts/${id - 1}`}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.prevCart}>
              Prev
            </Button>
          </Link>

          <Link to="/posts/">
            <Button
              variant="contained"
              color="primary">
              Back
            </Button>
          </Link>
        </div>

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
            {currencyPrice}
          </CardContent>
          <CardActions>
            <Button id="add-cart" className={classes.button} size="small" color="primary" onClick={this.addToCart}>
              Buy
            </Button>
          </CardActions>
        </Card>
        
        <Link to={`/posts/${id + 1}`}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.nextCart}>
            Next
          </Button>
        </Link>
        </div>

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
          <div>{title}</div>
          <div>{author}</div>
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
            onClick={this.handleClose}
          >
          </IconButton>,
        ]}
      />
      </div>
    )
  }
};

export default withStyles(styles)(ProductPage);

ProductPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
