import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Header, Container, Notification } from 'components';

@connect(state => ({ user: state.auth.user, error: state.auth.error }))
export default class Account extends Component {
  static propTypes = {
    user: PropTypes.object,
    error: PropTypes.object
  }

  render() {
    const { user, error } = this.props;
    return (
      <div>
        <Helmet title="Account" />
        <Header title="Account" />

        <Container>
          <Notification error={error} />
          <Subheader>Hello {user.name || user.email}! These are details for your account.</Subheader>
          <TextField ref="username" name="username" defaultValue={user.email} floatingLabelText="Username" /><br />
          <TextField ref="name" name="name" defaultValue={user.name} floatingLabelText="Name" /><br />
          <FlatButton label="Update" disabled />
        </Container>
      </div>
    );
  }
}
