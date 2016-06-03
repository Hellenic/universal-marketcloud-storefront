import React from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';

import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Person from 'material-ui/svg-icons/social/person';
import Info from 'material-ui/svg-icons/action/info';
import Question from 'material-ui/svg-icons/action/question-answer';
import HelpOutline from 'material-ui/svg-icons/action/help-outline';
import {indigo50} from 'material-ui/styles/colors';

export default class MenuDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  toggle = () => this.setState({open: !this.state.open});
  close = () => this.setState({open: false});

  render() {
    return (
      <div>
        <IconButton onTouchTap={this.toggle}><NavigationMenu color={indigo50} /></IconButton>
        <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
          <MenuItem leftIcon={<Info />} onTouchTap={this.close}><Link to="/widgets">Widgets</Link></MenuItem>
          <MenuItem leftIcon={<Question />} onTouchTap={this.close}><Link to="/survey">Survey</Link></MenuItem>
          <MenuItem leftIcon={<HelpOutline />} onTouchTap={this.close}><Link to="/about">About Us</Link></MenuItem>
          <MenuItem leftIcon={<Person />} onTouchTap={this.close}><Link to="/login">Login</Link></MenuItem>
          <Divider />
          {/* If logged in */}
          <MenuItem primaryText="Chat" onTouchTap={this.close} />
          <MenuItem primaryText="Logout" onTouchTap={this.close} />
          {/* <Text>Logged in as ###</Text> */}
        </Drawer>
      </div>
    );
  }
}
