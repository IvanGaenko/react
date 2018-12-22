import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  flex: {
    flex: 1,
  }
};

class Home extends Component {
  render() {
    return (<Typography variant="title" color="inherit" className={this.props.classes.flex}>
    Welcome
  </Typography>)
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);