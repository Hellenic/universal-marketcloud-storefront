import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import * as authActions from 'redux/modules/auth';

import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Header, Container, Notification } from 'components';

@connect(state => ({ user: state.auth.user, error: state.auth.error }), authActions)
export default class Login extends Component {
  static propTypes = {
    user: PropTypes.object,
    error: PropTypes.object,
    login: PropTypes.func,
    logout: PropTypes.func
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.handleSubmit(event);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.refs.username;
    const pass = this.refs.password;
    this.props.login(user.input.value, pass.input.value);
    user.input.value = '';
    pass.input.value = '';
  }

  render() {
    const { user, error, logout } = this.props;
    console.log('Error', error);

    return (
      <div>
        <Helmet title="Login" />
        <Header title="Login" />

        <Container>
          {!user &&
            <div>
              <Notification error={error} />
              <TextField id="login-user" ref="username" name="username"
                hintText="Username" onKeyDown={() => this.handleKeyDown()} />
              <TextField id="login-pass" ref="password" name="password" type="password"
                hintText="Password" onKeyDown={() => this.handleKeyDown()} />
              <FlatButton label="Login" primary onTouchTap={() => this.handleSubmit()} />
              <Subheader>Not registered yet? You can find <Link to="/register">registration here</Link>.</Subheader>
            </div>
          }

          {user &&
            <div>
              <p>You are currently logged in as {user.name}.</p>
              <FlatButton label="Log out" primary onTouchTap={logout} />
            </div>
          }
        </Container>
      </div>
    );
  }
}
