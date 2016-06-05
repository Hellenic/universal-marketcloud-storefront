import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import * as authActions from 'redux/modules/auth';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Header } from 'components';
import styles from './Login.scss';

@connect(state => ({user: state.auth.user}), authActions)
export default class Login extends Component {
  static propTypes = {
    user: PropTypes.object,
    login: PropTypes.func,
    logout: PropTypes.func
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // const input = this.refs.username;
    // this.props.login(input.value);
    // input.value = '';
  }

  render() {
    const { user, logout } = this.props;

    return (
      <div>
        <Helmet title="Login" />
        <Header title="Login" />

        <div className={styles.container}>
          {!user &&
            <div>
              <TextField id="login-user" name="username" hintText="Username" />
              <TextField id="login-pass" name="password" type="password" hintText="Password" />
              <FlatButton label="Login" primary onTouchTap={this.handleSubmit} />
            </div>
          }

          {user &&
            <div>
              <p>You are currently logged in as {user.name}.</p>
              <FlatButton label="Log out" primary onTouchTap={logout} />
            </div>
          }
        </div>
      </div>
    );
  }
}
