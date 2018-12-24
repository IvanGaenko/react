import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  flex: {
    flex: 1,
  }
};

class NotFound extends Component {
  render() {
    return (
      <div>
        <Typography variant="title" color="inherit" className={this.props.classes.flex}>
          NotFound
        </Typography>
        <Link to="/">
          <Button variant="contained" color="primary">
            Home
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