import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class LeftDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      login: false
    };

    this.handleToggle = () => this.setState({open: !this.state.open});

    this.handleClose = () => this.setState({open: false});

    this.loginPopup = () => this.setState({login: !this.state.login})
  }


  render() {
    return (
      <div>
        <RaisedButton
          label="Login"
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem>Login</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Drawer>
      </div>
    );
  }
}

module.exports = LeftDrawer;
