import React, { Component } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import noimg from './media/noimg.png'


class Rsvp extends Component {

  constructor(props){
    super(props);

    this.namelist = this.namelist.bind(this);

    this.state = {
      rsvp: {},
      isLoading: true
    }
  }

  componentWillMount(){
    axios.get(`http://jmacaldo.com/traffic/api/plates/meetuprsvp`)
    .then(res => {
      this.setState({
        rsvp: res.data.data
      })
    })
    .then( res => {
      this.setState({isLoading: false})
    })
  }

// Taking RSVP names from state and then pushing them to a helper array that then gets diplayed in the DOM
  namelist = () => {
    let names = []
    for (let item in this.state.rsvp){
      names.push(this.state.rsvp[item].member);
    }

    console.log(names);
    

    return names.map((item, index) => (


      <div key={index} className="rsvplist">
        <Avatar alt="user" src={item.photo? item.photo.thumb_link : noimg} /> <div className="rsvpname">{item.name}</div>
      </div>

    )) // 
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
          <div className="rsvpLoading">
            Loading...
          </div>
        }


      </div>
    );
  }
}

export default Rsvp;
