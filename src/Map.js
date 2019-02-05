import React, { Component } from 'react';
import pin from './media/pin.svg'
import clock from './media/clock.svg'

class Map extends Component {



  render() {
    console.log(this.props.place);
    return (
    <div>
        {this.props.place&&
          <div>
            <div className="mapWidget">
              <div>
                <img src={pin} className="icons" />
              </div>
              <div className="address">
                <div>{this.props.place.address_1}</div>
                <div>{this.props.place.address_2}</div>
                <div>{this.props.place.city},{this.props.place.state.toUpperCase()} {this.props.place.zip}</div>
              </div>
            </div>

            <div className="mapWidget">
              <div>
                <img src={clock} className="icons" />
              </div>
              <div className="address">
                <div>{this.props.place.address_1}</div>
                <div>{this.props.place.address_2}</div>
                <div>{this.props.place.city},{this.props.place.state.toUpperCase()} {this.props.place.zip}</div>
              </div>
            </div>
          </div>

        }


      </div>
    );
  }
}

export default Map;
