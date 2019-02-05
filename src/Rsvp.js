import React, { Component } from 'react';
import axios from 'axios';
import UserAvatar from './UserAvatar'
import Avatar from '@material-ui/core/Avatar';

class Rsvp extends Component {

  constructor(props){
    super(props);

    this.namelist = this.namelist.bind(this);

    this.state = {
      rsvp: {},
      isLoading: true,
      avatars: []
    }
  }

  componentWillMount(){
    axios.get(`https://api.meetup.com/reactjs-dallas/events/pbbdwnyzdbqb/rsvps?&sign=true&photo-host=public`)
    .then(res => {
      this.setState({
        rsvp: res.data
      })
    })
    .then( res => {

      this.setState({isLoading: false})
    })
  }

  namelist = () => {

      console.log('test');
      let names = []
      let avatars = []
      for (let item in this.state.rsvp){
        names.push(this.state.rsvp[item].member.name);
      }

      return names.map((item, index) => (
        <div key={index} className="rsvplist">
          <div className="rsvpname">{item}</div>
        </div>
      ))


  }



  render() {
    return (
      <div className="rsvpmodal">
        {!this.state.isLoading&&
          <div>
            {this.namelist()}
          </div>
        }

        {this.state.isLoading&&
          <div>
            Loading...
          </div>
        }


      </div>
    );
  }
}

export default Rsvp;
