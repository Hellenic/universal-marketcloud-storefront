import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { logout } from 'redux/modules/auth';
import { open, close, set } from 'redux/modules/drawer';
import { display as displaySnack } from 'redux/modules/snackbar';

import AppBar from 'material-ui/AppBar';
// import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Person from 'material-ui/svg-icons/social/person';
import Home from 'material-ui/svg-icons/action/home';
import Question from 'material-ui/svg-icons/action/question-answer';
import HelpOutline from 'material-ui/svg-icons/action/help-outline';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import Favorite from 'material-ui/svg-icons/action/favorite';

import config from '../../config';
import theme from '../../theme/mui-theme';
import styles from './NavigationBar.scss';

// TODO It might be wise to further separate session handling from the navigation.
// TODO This component need a lot of splitting up
@connect(state => ({ auth: state.auth.user, isOpen: state.drawer.open }), { pushState: push, logout, open, close, set, displaySnack })
export default class NavigationBar extends Component {
  static propTypes = {
    auth: PropTypes.object,
    isOpen: PropTypes.bool,
    open: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    set: PropTypes.func.isRequired,
    displaySnack: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  }

  // Display Snackbar and redirect on login / logout
  componentWillReceiveProps(nextProps) {
    // Login in progress
    if (!this.props.auth && nextProps.auth) {
      this.props.displaySnack('You have signed in!', 4000);
      this.props.pushState('/loginSuccess');
    }
    // Logging out
    else if (this.props.auth && !nextProps.auth) {
      this.props.displaySnack('You have signed out!', 4000);
      this.props.pushState('/');
    }
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

  renderActions() {
    return (
      <div>
        <IconButton onTouchTap={this.goto.bind(this, '/account')}>
          <Person color={theme.palette.accent2Color} />
        </IconButton>
        <IconButton onTouchTap={this.goto.bind(this, '/favourites')}>
          <Favorite color={theme.palette.accent2Color} />
        </IconButton>
        <IconButton onTouchTap={this.goto.bind(this, '/cart')}>
          <ShoppingCart color={theme.palette.accent1Color} />
        </IconButton>
      </div>
    );
  }

  render() {
    const { auth, isOpen, open, set } = this.props;

    return (
      <div>
        <AppBar
          title={<span className={styles.header}>{config.app.title}</span>}
          onTitleTouchTap={() => this.props.pushState('/')}
          iconElementLeft={<IconButton onTouchTap={open}><NavigationMenu /></IconButton>}
          iconElementRight={this.renderActions()} />

        <Drawer docked={false} open={isOpen} onRequestChange={set}>
          <MenuItem leftIcon={<Home />} onTouchTap={this.goto.bind(this, '/')} primaryText="Home" />
          <Divider />
          <MenuItem leftIcon={<Question />} onTouchTap={this.goto.bind(this, '/survey')} primaryText="Survey" />
          <MenuItem leftIcon={<HelpOutline />} onTouchTap={this.goto.bind(this, '/faq')} primaryText="FAQ" />
          <MenuItem leftIcon={<HelpOutline />} onTouchTap={this.goto.bind(this, '/contact')} primaryText="Contact Us" />
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
