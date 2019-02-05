import React, { Component } from 'react';
import './index.css';
import logo from './media/logo.svg'

class Nav extends Component {

  constructor(props){
    super(props);

    this.state = {
      isTop: true,
    }

    this.onScroll = this.onScroll.bind(this);
  }

  onScroll(isTop) {
   this.setState({ isTop });
  }


  componentDidMount() {

   //Minimizes header height when user scrolls past 50px on the Y axis
   document.addEventListener('scroll', () => {
     const isTop = window.scrollY < 50;
     if (isTop !== this.state.isTop) {
       this.onScroll(isTop);
     }
    });
  }

  render() {
    return (
      <div>
        <div className={this.state.isTop ? 'navUp' : 'navDown'}>
          <div className={this.state.isTop ? 'topLeftUp' : 'topLeftDown'}>
            <img className={this.state.isTop ? 'iconUp' : 'iconDown'} src={logo} alt="MeetUp Logo"></img>
          </div>

          <span className="filler"></span>
        </div>

      </div>
    );
  }
}

export default Nav;
