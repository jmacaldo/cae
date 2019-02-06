import React, { Component } from 'react';
import Map from './Map'

/*
On line 20, props.description is a string returned by the API, and it is marked up with HTML tags.
This string is set as as inner HTML inside a <p> tag.
I am fully aware of the security implications of doing this.
I do this with the assumption that MeetUp sanitizes this data field of
<script> tags and other means of running malicious code.
*/

class Details extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="detailsLeft">
          <div className="detailsH1">
            Details
          </div>
          <p className="descText" dangerouslySetInnerHTML={{ __html: this.props.description }}>
          </p>
        </div>
        <div className="detailsRight">
          <div className="location">
            <Map place={this.props.venue} time={this.props.time} date={this.props.date} />
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
