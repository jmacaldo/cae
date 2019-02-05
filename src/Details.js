import React, { Component } from 'react';
import Map from './Map'

class Details extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="detailsLeft">
          <div className="detailsH1">
            Details
          </div>
          <p classname="descText" dangerouslySetInnerHTML={{ __html: this.props.description }}>
          </p>
        </div>
        <div className="detailsRight">
          <div className="location">
            <Map place={this.props.venue} />
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
