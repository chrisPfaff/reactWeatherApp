import React from 'react';
import api from '../../config.js';


class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    {console.log(this.props.latLon)};
    return (
    <div className='map'>
      <img className='mapImage' src={`https://maps.googleapis.com/maps/api/staticmap?center=${String(this.props.latLon.lat)},${String(this.props.latLon.lon)}&zoom=8&size=600x300&key=${api.maps}`}></img>
    </div>
    )
  }
}

export default Map;
