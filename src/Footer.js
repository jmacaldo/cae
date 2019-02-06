import React, { Component } from 'react';

class Footer extends Component {


  render() {
    return (
      <div className="footerContainer">
        <div className="footerLeft">
          A coding challenge done by <a className="footerLink" href="https://www.jmacaldo.com/" target='_blank' rel="noopener noreferrer">Joven Macaldo</a> in support for his application for the front-end developer position at Call-Em-All. View this project's source code <a className="footerLink" href="https://github.com/jmacaldo/cae" target="_blank" rel="noopener noreferrer" >HERE</a>.
        </div>

      </div>
    );
  }
}

export default Footer;
