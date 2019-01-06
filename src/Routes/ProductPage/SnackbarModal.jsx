import React, { Component } from "react";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

const styles = () => ({
    close: {
      padding: 20,
    }
  });

class SnackbarModal extends Component {
  render() {
    const { classes, handleClose, open } = this.props;
    const { title, author } = this.props.singleProduct;
      return (
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
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
          <Button
            key="undo"
            color="inherit"
            size="small"
            onClick={handleClose}
          >
            Close
          </Button>,
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          ></IconButton>,
        ]}
      />
    )
  }
};

export default withStyles(styles)(SnackbarModal);

SnackbarModal.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};
