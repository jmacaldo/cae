import React, { Component } from 'react';
import Nav from './Nav'
import Details from './Details'
import Title from './Title'
import Footer from './Footer'
import axios from 'axios'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      data: {}
    }
  }

  componentWillMount(){
    axios.get(`https://api.meetup.com/reactjs-dallas/events?photo-host=public&page=1&sig_id=93703432&sig=f41f61f384af1306625a990f8ec0df41bd4b74d9`)
    .then(res => {
      this.setState({
        data: res.data[0]
      })
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <Title className="titleclear" name={this.state.data.name} id={this.state.data.id} time={this.state.data.time} />
        <Details description={this.state.data.description} venue={this.state.data.venue} />
        <Footer />
      </div>
    );
  }
}

export default App;
