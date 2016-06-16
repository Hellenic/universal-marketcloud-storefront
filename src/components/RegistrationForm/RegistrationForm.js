import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextInput from './TextInput';

import registrationValidation from './registrationValidation';
import * as registerActions from 'redux/modules/register';

@connect(state => ({ state: state.register }),
  dispatch => bindActionCreators(registerActions, dispatch)
)
@reduxForm({
  form: 'registration',
  fields: ['firstName', 'lastName', 'email', 'password', 'passwordRepeat'],
  validate: registrationValidation
})
export default class RegistrationForm extends Component {
  static propTypes = {
    state: PropTypes.object,
    active: PropTypes.string,
    fields: PropTypes.object.isRequired,
    dirty: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired
  }

  render() {
    const {
      fields: { firstName, lastName, email, password, passwordRepeat },
      handleSubmit,
      resetForm,
      state
    } = this.props;

    let emailError = '';
    if (state.error.message) {
      // API errors are not 100% clear yet, this needs work.
      emailError = (state.error.type === 'BadRequest') ? 'Email is already in use.' : state.error.message;
    }

    return (
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
    );
  }
}
