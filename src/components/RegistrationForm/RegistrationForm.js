import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';

import { Notification } from 'components';
import * as registerActions from 'redux/modules/register';
import registrationValidation from './registrationValidation';
import TextInput from './TextInput';

@connect(state => ({ errorState: state.register }),
  dispatch => bindActionCreators(registerActions, dispatch)
)
@reduxForm({
  form: 'registration',
  fields: ['firstName', 'lastName', 'email', 'password', 'passwordRepeat'],
  validate: registrationValidation
})
export default class RegistrationForm extends Component {
  static propTypes = {
    errorState: PropTypes.object,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    fields: PropTypes.object.isRequired,
    // active: PropTypes.string,
    // dirty: PropTypes.bool.isRequired,
    // invalid: PropTypes.bool.isRequired,
    // pristine: PropTypes.bool.isRequired,
    // valid: PropTypes.bool.isRequired
  }

  render() {
    const {
      fields: { firstName, lastName, email, password, passwordRepeat },
      handleSubmit,
      resetForm,
      errorState
    } = this.props;

    let emailError = '';
    if (errorState.error.message) {
      // API errors are not 100% clear yet, this needs work.
      emailError = (errorState.error.type === 'BadRequest') ? 'Email is already in use.' : '';
    }
    return (
      <div>
        <Notification error={errorState.error} />
        <form>
          <TextInput id="first-name" hintText="First name" field={firstName} /><br />
          <TextInput id="last-name" hintText="Last name" field={lastName} />
          <br />
          <TextInput id="email" hintText="E-Mail" field={email} errorText={emailError} />
          <br />
          <TextInput id="password" hintText="Password" field={password} type="password" /><br />
          <TextInput id="password-again" hintText="Repeat password" field={passwordRepeat} type="password" />
          <br />
          <RaisedButton label="Register" primary onTouchTap={handleSubmit} />
          {' '}
          <RaisedButton label="Clear form" default onTouchTap={resetForm} />
        </form>
      </div>
    );
  }
}
