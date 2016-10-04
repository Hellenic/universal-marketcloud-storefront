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
    const user = this.username;
    const pass = this.password;
    this.props.login(user.input.value, pass.input.value);
    user.input.value = '';
    pass.input.value = '';
  }

  render() {
    const { user, error, logout } = this.props;
    return (
      <div>
        <Helmet title="Login" />
        <Header title="Login" />

        <Container>
          {!user &&
            <div>
              <Notification error={error} />
              <TextField
                id="login-user"
                ref={(input) => { this.username = input; }}
                name="username"
                hintText="Username"
                onKeyDown={ev => this.handleKeyDown(ev)}
              />
              <TextField
                id="login-pass"
                ref={(input) => { this.password = input; }}
                name="password"
                type="password"
                hintText="Password"
                onKeyDown={ev => this.handleKeyDown(ev)}
              />
              <FlatButton label="Login" primary onTouchTap={ev => this.handleSubmit(ev)} />
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
