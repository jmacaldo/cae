import React, { Component } from 'react';
import pin from './media/pin.svg'
import clock from './media/clock.svg'
import {dateConvert, timeConvert} from './date'

class Map extends Component {
  render() {
    return (
    <div>
        {this.props.place&&
          <div>
            <div className="mapWidget">
              <div>
                <img src={pin} alt="icon" className="icons" />
              </div>
              <div className="address">
                <div>{this.props.place.address_1}</div>
                <div>{this.props.place.address_2}</div>
                <div>{this.props.place.city},{this.props.place.state.toUpperCase()} {this.props.place.zip}</div>
              </div>
            </div>

            <div className="mapWidget">
              <div>
                <img src={clock} alt="icon" className="icons" />
              </div>
              <div className="address">
                <div>{dateConvert(this.props.date)}</div>
                <div>{timeConvert(this.props.time)}</div>
              </div>
            </div>
          </div>

        }


      </div>
    );
  }
}

export default Map;
