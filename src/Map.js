import React, { Component } from 'react';

class Map extends Component {


  render() {
    return (
      <div className="mapWidget">
        <p>{this.props.venue.name}</p>
      </div>
    );
  }
}

export default Map;
