import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import { logout } from 'redux/modules/auth';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';

import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Person from 'material-ui/svg-icons/social/person';
import Question from 'material-ui/svg-icons/action/question-answer';
import HelpOutline from 'material-ui/svg-icons/action/help-outline';
import {indigo50} from 'material-ui/styles/colors';

@connect(state => ({ auth: state.auth.user }), {logout})
export default class MenuDrawer extends Component {

  static propTypes = {
    auth: PropTypes.object,
    logout: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
    this.close();
  };

  toggle = () => this.setState({open: !this.state.open});
  close = () => this.setState({open: false});

  render() {
    const {auth} = this.props;

    return (
      <div>
        <IconButton onTouchTap={this.toggle}><NavigationMenu color={indigo50} /></IconButton>
        <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
          <MenuItem leftIcon={<Question />} onTouchTap={this.close}><Link to="/survey">Survey</Link></MenuItem>
          <MenuItem leftIcon={<HelpOutline />} onTouchTap={this.close}><Link to="/about">About Us</Link></MenuItem>
          <Divider />
          {!auth && <MenuItem leftIcon={<Person />} onTouchTap={this.close}><Link to="/login">Login</Link></MenuItem>}
          {/* If logged in */}
          {auth && <MenuItem leftIcon={<Question />} onTouchTap={this.close}><Link to="/chat">Chat</Link></MenuItem>}
          {auth && <MenuItem leftIcon={<Person />} onTouchTap={this.handleLogout}><Link to="#">Logout</Link></MenuItem>}
          {auth && <MenuItem leftIcon={<Person />} onTouchTap={this.close}><span>Logged in as {auth.name}</span></MenuItem>}
        </Drawer>
      </div>
    );
  }
}
