import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import Cloud from 'material-ui/svg-icons/file/cloud';
import {grey500, blue500} from 'material-ui/styles/colors';
import styles from '../../public/styles/styles.css'
import Search from './Search.js'
import Drawer from './Drawer.js'
import CircularProgress from 'material-ui/CircularProgress';
import SvgIcon from 'material-ui/SvgIcon';

class Main extends React.Component {
  constructor()  {
    super();
    this.state = {}
  }

  render() {
    return (
      <MuiThemeProvider>
      <div>
          <AppBar
           style={{backgroundColor:grey500}}
           title={<div className='appBar'>Weather React</div>}
           showMenuIconButton={false}
           iconElementRight={<SvgIcon className='cloud' style={{width:60,height: 60}}><Cloud hoverColor={blue500}/></SvgIcon>}
           />
           <Drawer/>
           <div style={styles} className='searchBar'><Search/></div>
           <div className='footer'>
              <p className='footText'>Chris Pfaff</p>
           </div>
      </div>
      </MuiThemeProvider>
    )
  }
}

module.exports = Main;
