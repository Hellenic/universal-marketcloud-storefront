import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { logout } from 'redux/modules/auth';
import { open, close, set } from 'redux/modules/drawer';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Person from 'material-ui/svg-icons/social/person';
import Question from 'material-ui/svg-icons/action/question-answer';
import HelpOutline from 'material-ui/svg-icons/action/help-outline';

import ActionButtons from './ActionButtons';

import config from '../../config';
import styles from './NavigationBar.scss';

@connect(state => ({ auth: state.auth.user, isOpen: state.drawer.open }), { pushState: push, logout, open, close, set })
export default class NavigationBar extends Component {
  static propTypes = {
    auth: PropTypes.object,
    isOpen: PropTypes.bool,
    open: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    set: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  }

  logout(event) {
    event.preventDefault();
    this.props.logout();
    this.props.close();
  }

  goto(url) {
    this.props.pushState(url);
    this.props.close();
  }

  render() {
    const { auth, isOpen, open, set } = this.props;

    return (
      <div>
        <AppBar
          title={<span className={styles.header}>{config.app.title}</span>}
          onTitleTouchTap={() => this.props.pushState('/')}
          iconElementLeft={<IconButton onTouchTap={open}><NavigationMenu /></IconButton>}
          iconElementRight={<ActionButtons />} />

        <Drawer docked={false} open={isOpen} onRequestChange={set}>
          <MenuItem leftIcon={<Question />} onTouchTap={this.goto.bind(this, '/survey')} primaryText="Survey" />
          <MenuItem leftIcon={<HelpOutline />} onTouchTap={this.goto.bind(this, '/about')} primaryText="About Us" />
          <Divider />
          {!auth && <MenuItem leftIcon={<Person />} onTouchTap={this.goto.bind(this, '/login')} primaryText="Login" />}
          {/* If logged in */}
          {auth && <MenuItem leftIcon={<Question />} onTouchTap={this.goto.bind(this, '/chat')} primaryText="Chat" />}
          {auth && <MenuItem leftIcon={<Person />} onTouchTap={this.logout.bind(this)} primaryText="Logout" />}
          {auth && <MenuItem><span>Logged in as {auth.name}</span></MenuItem>}
        </Drawer>
      </div>
    );
  }
}
