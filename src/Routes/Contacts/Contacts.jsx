import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  flex: {
    flex: 1,
  }
};

class Contacts extends Component {
  render() {
    return (<Typography variant="title" color="inherit" className={this.props.classes.flex}>
    <p>Contacts</p>
    <a href="https://www.obozrevatel.com/culture/top-50-samyih-dorogih-kartin-v-mire.htm">Source</a>
    
  </Typography>)
  }
}

Contacts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contacts);