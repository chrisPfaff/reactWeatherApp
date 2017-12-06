import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class WeatherData extends React.Component {
  constructor(props) {
    super(props);

    this.style = {
      height: 200,
      width: 700,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    }
  }

  render() {
    {console.log(this.props)};
    return (
    <div className='weatherAttributes'>
          <Card>
          <CardHeader className='card'
            title={'Expand To See Weather Conditions in ' + this.props.data.city_name}
            actAsExpander={true}
            showExpandableButton={true}
            />
            <CardText expandable={true}>
            <ul>
              <li><span className='list'>Tempature : {this.props.data.temp} </span></li>
              <li><span className='list'>Clouds :  {this.props.data.clouds} percent</span></li>
              <li><span className='list'>Dewpoint : {this.props.data.dewpt}</span></li>
              <li><span className='list'>Precipitation : {this.props.data.precip}</span></li>
              <li><span className='list'>Visibility : {this.props.data.vis} miles</span></li>
              <li><span className='list'>UV Index : {this.props.data.uv} </span></li>
            </ul>
            </CardText>
          </Card>
    </div>
    )
  }
}

export default WeatherData;
