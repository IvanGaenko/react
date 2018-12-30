import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  flex: {
    flex: 1,
    marginBottom: 50,
  }
};

class NotFound extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography
        variant="title"
        color="inherit"
        className={this.props.classes.flex}>
          Page Not Found. Something went wrong. Please, contacts us to repair this problem.
        </Typography>

        <Link to="/">
          <Button
          variant="contained"
          color="primary">
            Go To Home
          </Button>
        </Link>
        
        <Link to="/posts/">
          <Button
            variant="contained"
            color="primary">
            <button>Go To Products</button>
          </Button>
        </Link>
      </div>
    )
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);
