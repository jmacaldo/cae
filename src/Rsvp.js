import React, { Component } from 'react';
import axios from 'axios';

class Rsvp extends Component {

  constructor(props){
    super(props);

    this.namelist = this.namelist.bind(this);

    this.state = {
      rsvp: {}
    }
  }

  componentWillMount(){
    axios.get(`https://api.meetup.com/reactjs-dallas/events/pbbdwnyzdbqb/rsvps?&sign=true&photo-host=public`)
    .then(res => {
      this.setState({
        rsvp: res.data
      })

    })
  }

  namelist = () => {

    let arr = []
    for (let item in this.state.rsvp){
     arr.push( <div key={item}>this.state.rsvp[item].member.name</div>);
    }

    return arr
  }



  render() {
    return (
      <div className="rsvpmodal">
        {this.state.rsvp[0]&&
          <div>
            {this.namelist()}
          </div>

        }


      </div>
    );
  }
}

export default Rsvp;
