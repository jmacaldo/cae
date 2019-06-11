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
    //Custom proxy server is used to get around CORS issue.
    axios.get(`http://jmacaldo.com/traffic/api/plates/meetup`)
    .then(res => {
      this.setState({
        data: res.data.data[0]
      })

      console.log(res)
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <Title className="titleclear" name={this.state.data.name} id={this.state.data.id} time={this.state.data.time} />
        <Details description={this.state.data.description} venue={this.state.data.venue} date={this.state.data.time} time={this.state.data.local_time} />
        <Footer />
      </div>
    );
  }
}

export default App;
