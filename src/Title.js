import React, { Component } from 'react';
import {dateConvert} from './date'
import Button from '@material-ui/core/Button';
import Rsvp from './Rsvp'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';



class Title extends Component {
  constructor(props){
    super(props)

    this.state = {
      open: false,
    };

  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="titleContainer">
        <div className="titleLeft">
          <div className="time">
          {dateConvert(this.props.time)}
          </div>

          {this.props.name}
          <div>
            <Button variant="contained" color="secondary" onClick={this.handleOpen}>
              View RSVP
            </Button>
          </div>

            <Dialog
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
            >
            <DialogTitle id="simple-dialog-title">RSVPs</DialogTitle>
              <div >
                <Rsvp id={this.props.id} />
              </div>
            </Dialog>


        </div>
        <div className="titleRight">
        </div>

      </div>
    );
  }
}

export default Title;
