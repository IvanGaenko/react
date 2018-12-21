import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              <NavLink exact to="/">Home</NavLink>
            </Typography>
            <Typography variant="title" color="inherit" className={classes.flex}>
              <NavLink exact to="/posts">Products</NavLink>
            </Typography>
            <Typography variant="title" color="inherit" className={classes.flex}>
              <NavLink exact to="/contacts">Contacts</NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
