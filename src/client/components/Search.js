import styles from '../../public/styles/styles.css'
import RaisedButton from 'material-ui/RaisedButton';
import {grey500} from 'material-ui/styles/colors';
import api from '../../config.js';
import Map from './Map.js'
import WeatherData from './WeatherData.js'
import CircularProgress from 'material-ui/CircularProgress';


class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      city: '',
      state: '',
      renderMap: false,
      renderData: false,
      data: null,

    }

    this.handleChange = (event) => {
        this.setState({city: event.target.value});
    }

    this.stateChange = (event) => {
      this.setState({state: event.target.value});
    }

    this.genMap = (event) => {
      event.preventDefault();
      this.setState({renderMap: !this.state.renderMap});
      this.setState({renderData: !this.state.renderData});
    }

    this.handleSubmit = (event) => {
      event.preventDefault();
      var request = new Request(`http://api.weatherbit.io/v2.0/current?city=${this.state.city}&state=${this.state.state}&key=${api.key}`, {
	       method: 'GET',
	       mode: 'cors',
	       headers: new Headers({
		        'Content-Type': 'text/plain'
	        })
      });

      fetch(request).then((res) => {
        if(res.status !== 200) {
          this.setState({state: 'Enter a valid state'});
          this.setState({city: 'Enter a valid city'});
          throw Error(res.statusText);
        } else {
          return res.json();
        }
      }).then((data) => {
        let attributes = data.data[0];
        this.setState({data: attributes});
      })
      // var data = res.json();
      // data.then((weather) => {
      //   let attributes = weather.data[0];
      //   console.log(attributes);
      //   this.setState({data: attributes});
      // }})
    //})
  }
}

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input style={styles} className='textbox' type='text'
          placeholder='City'
          value={this.state.city}
          onChange={this.handleChange}
          />
          <input style={styles} className='textbox1' type='text'
          placeholder='State'
          value={this.state.state}
          onChange={this.stateChange}
          />
          <RaisedButton style={{backgroundColor: grey500}} className="submitButton" type="submit" label="Submit" primary={false} />
        </form>
          <div className='mappy'>
              <RaisedButton style={{backgroundColor: grey500}} onClick={this.genMap} type="submit" className="mapButton" label="Generate Map And Conditions" primary={false} />
          </div>
          { this.state.renderMap ? <Map latLon={this.state.data}/> : null }
          <div  className='cardData'>
          { this.state.renderData ? <WeatherData data={this.state.data}/> : null }
          </div>
      </div>
    )
  }
}

module.exports = Search;
