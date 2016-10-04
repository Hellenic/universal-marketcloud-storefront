import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { load as loadDetails } from 'redux/modules/auth';
import Helmet from 'react-helmet';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Header, Container, Notification } from 'components';

@connect(state => ({ user: state.auth.user, token: state.auth.token, error: state.auth.error }), { loadDetails })
export default class Account extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
    error: PropTypes.object,
    loadDetails: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.props.loadDetails(props.user.id, props.token);
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
          <TextField name="username" defaultValue={user.email} floatingLabelText="Username" /><br />
          <TextField name="name" defaultValue={user.name} floatingLabelText="Name" /><br />
          <Subheader><small>Account created {user.created_at}</small></Subheader>
          <FlatButton label="Update" disabled />
        </Container>
      </div>
    );
  }
}
