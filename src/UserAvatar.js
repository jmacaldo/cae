import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';

class UserAvatar extends Component {


  render() {
    return (
      <div>{this.props.url}</div>
      
    );
  }
}

export default UserAvatar;
